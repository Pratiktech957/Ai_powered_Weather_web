// ----------------- Imports -----------------
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const http = require("http");
const socketIo = require("socket.io");

// ----------------- App Setup -----------------
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = 5000;
const JWT_SECRET = "mysecretkey"; // In production use process.env.JWT_SECRET

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));

// ----------------- MongoDB -----------------
mongoose.connect("mongodb://127.0.0.1:27017/weatherDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Error:", err));

// ----------------- JWT Middleware -----------------
function authMiddleware(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ message: "No token, auth denied" });

    try {
        const decoded = jwt.verify(token.split(" ")[1], JWT_SECRET);
        req.user = decoded; // { id, name }
        next();
    } catch (err) {
        return res.status(401).json({ message: "Token is not valid" });
    }
}

// ----------------- User Schema -----------------
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});
const User = mongoose.model("User", userSchema);

// ----------------- Report Schema -----------------
const reportSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    severity: Number,
    location: { type: { type: String, default: "Point" }, coordinates: [Number] },
    images: [String],
    anonymous: Boolean,
    reporterId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    status: { type: String, default: "approved" },
    upvotes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});
const Report = mongoose.model("Report", reportSchema);

// ----------------- Multer for File Upload -----------------
const upload = multer({ dest: path.join(__dirname, "uploads/") });

// ----------------- Auth Routes -----------------

// Signup Route
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists!" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.json({ message: "Signup successful!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login Route
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found!" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials!" });

        const token = jwt.sign({ id: user._id, name: user.name }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token, name: user.name });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ----------------- Report Routes -----------------

// Create Report (protected)
app.post("/api/report", authMiddleware, upload.single("photo"), async (req, res) => {
    try {
        const { category, title, description, severity, lat, lng, anonymous } = req.body;

        const r = new Report({
            title,
            description,
            category,
            severity: Number(severity || 3),
            anonymous: anonymous === "true",
            location: { type: "Point", coordinates: [parseFloat(lng || 0), parseFloat(lat || 0)] },
            reporterId: req.user.id
        });

        if (req.file) {
            r.images = [`/uploads/${req.file.filename}`];
        }

        await r.save();
        io.emit("new-report", r.toObject()); // realtime push
        res.json(r);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "error" });
    }
});

// Fetch Reports
app.get("/api/reports", async (req, res) => {
    const { timeWindow = "24", category } = req.query;
    const since = new Date(Date.now() - Number(timeWindow) * 3600 * 1000);

    const q = { createdAt: { $gte: since } };
    if (category && category !== "all") q.category = category;

    const reports = await Report.find(q).sort({ createdAt: -1 }).limit(100);
    res.json(reports);
});

// Upvote (protected)
app.post("/api/report/:id/upvote", authMiddleware, async (req, res) => {
    try {
        const r = await Report.findByIdAndUpdate(req.params.id, { $inc: { upvotes: 1 } }, { new: true });
        io.emit("report-updated", r);
        res.json(r);
    } catch (e) {
        res.status(500).json({ message: "error" });
    }
});

// ----------------- Default Routes -----------------
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "Weather.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "HomePage.html"));
});

// Serve uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ----------------- Socket.IO -----------------
io.on("connection", (socket) => {
    console.log("🔌 Client connected:", socket.id);
    socket.on("disconnect", () => console.log("❌ Client disconnected:", socket.id));
});

// ----------------- Start Server -----------------
server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
