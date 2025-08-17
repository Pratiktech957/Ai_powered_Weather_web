# 🌤️ Weather & Community Reporting Web App

<div align="center">

![GitHub Repo stars](https://img.shields.io/github/stars/Pratiktech957/weather-web?style=for-the-badge&logo=github&color=yellow)
![GitHub forks](https://img.shields.io/github/forks/Pratiktech957/weather-web?style=for-the-badge&logo=github&color=blue)
![GitHub license](https://img.shields.io/github/license/Pratiktech957/weather-web?style=for-the-badge&color=green)
![Node.js](https://img.shields.io/badge/Node.js-v20.5.1-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-5.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

### *Bridging Urban & Rural Communities Through Smart Weather Intelligence*

**A full-stack Weather & Community Reporting platform with real-time updates, AI-powered insights, and interactive 3D visualizations. Designed to serve both urban professionals and rural farmers with equal precision.**

[🚀 **Live Demo**](http://localhost:5000) • [📚 **Documentation**](#-api-endpoints) • [🛠️ **Installation**](#-installation--setup) • [🎯 **Features**](#-features)

---

</div>

## ✨ **What Makes This Special?**

<table align="center">
<tr>
<td align="center" width="33%">

### 🏙️ **Urban Ready**
Real-time weather data, community alerts, and interactive dashboards for city dwellers

</td>
<td align="center" width="33%">

### 🌾 **Rural Focused** 
Farmer-friendly interface, disaster preparedness, and agricultural weather insights

</td>
<td align="center" width="33%">

### 🤖 **AI Powered**
Smart predictions, safety chatbots, and personalized weather recommendations

</td>
</tr>
</table>

---

## 🎯 **Core Features**

<details>
<summary>🔐 <strong>Advanced Authentication System</strong></summary>

- **JWT-based authentication** with secure token management
- **bcryptjs password hashing** for maximum security
- **Protected routes** ensuring data privacy
- **Role-based access control** for different user types

</details>

<details>
<summary>🌦️ <strong>Weather & Community Intelligence</strong></summary>

- **Multi-category reporting**: Weather, Infrastructure, Agriculture, Emergency
- **Image upload support** with Multer integration
- **Anonymous reporting** for sensitive situations
- **Community engagement** with upvoting and filtering
- **Real-time notifications** via Socket.IO

</details>

<details>
<summary>💻 <strong>Interactive Frontend Experience</strong></summary>

- **Responsive design** optimized for all devices
- **GSAP animations** for smooth transitions
- **AOS scroll effects** for engaging user experience
- **Three.js 3D visualizations** for weather data
- **Parallax scrolling** with modern UI elements

</details>

---

## 🚀 **Innovation Roadmap**

<div align="center">

### 🎮 **Gamified Learning Platform**
> Transform weather education into an engaging experience

</div>

| Feature | Description | Status |
|---------|-------------|--------|
| 🌾 **Farmer Quiz System** | Interactive weather knowledge tests with rewards | 🔄 *In Development* |
| 🎁 **Reward Mechanism** | Earn points for participation and learning | 🔄 *In Development* |
| 📈 **Progress Tracking** | Monitor learning journey and achievements | 📋 *Planned* |

<div align="center">

### 🤖 **AI-Powered Safety Suite**
> Intelligent disaster prediction and response system

</div>

| Feature | Description | Status |
|---------|-------------|--------|
| 🌊 **Disaster Forecasting** | OpenWeatherMap + NASA API integration | ✅ *Active* |
| 🤖 **AI Safety Chatbot** | Real-time survival guidance and tips | 🔄 *In Development* |
| 🗺️ **Safe Route Finder** | Emergency navigation with danger alerts | 📋 *Planned* |
| 🎯 **Custom AI Models** | Enhanced prediction accuracy | 🔬 *Research Phase* |

---

## 💻 **Tech Stack**

<div align="center">

### Frontend Technologies
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)

### Backend & Database
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white)

### Libraries & Tools
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Multer](https://img.shields.io/badge/Multer-FF6B6B?style=for-the-badge)

</div>

---

## 🏗️ **Project Architecture**

```
weather_web/
┣ 📂 backend/
┃ ┣ 📂 uploads/              # 📸 User uploaded images
┃ ┣ 📂 controllers/          # 🎮 API business logic
┃ ┣ 📂 models/               # 🗃️ MongoDB schemas
┃ ┣ 📂 routes/               # 🛤️ Express endpoints
┃ ┣ 📄 server.js             # 🚀 Main server file
┃ ┗ 📄 package.json          # 📦 Dependencies
┣ 📂 public/
┃ ┣ 📄 Weather.html          # 🌤️ Main weather page
┃ ┣ 📄 HomePage.html         # 🏠 Landing page
┃ ┣ 📄 Login.html           # 🔑 Authentication
┃ ┣ 📄 Signup.html          # ✍️ Registration
┃ ┗ 📂 assets/              # 🎨 CSS, JS, Images, 3D models
┗ 📄 README.md              # 📖 This file
```

---

## ⚙️ **Installation & Setup**

<details>
<summary>📥 <strong>Quick Setup Guide</strong></summary>

### 1️⃣ **Clone Repository**
```bash
git clone https://github.com/Pratiktech957/weather-web.git
cd weather_web/backend
```

### 2️⃣ **Install Dependencies**
```bash
npm install
```

### 3️⃣ **Start MongoDB**
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

### 4️⃣ **Launch Application**
```bash
node server.js
```

### 5️⃣ **Access Application**
Open your browser and navigate to:
```
http://localhost:5000
```

</details>

---

## 📡 **API Documentation**

<div align="center">

### 🔐 **Authentication Endpoints**

</div>

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/signup` | Register new user | `{ name, email, password }` |
| `POST` | `/login` | Authenticate user | `{ email, password }` |

<div align="center">

### 📊 **Report Management**

</div>

| Method | Endpoint | Description | Authorization |
|--------|----------|-------------|---------------|
| `POST` | `/api/report` | Submit new report | Optional |
| `GET` | `/api/reports` | Fetch all reports | None |
| `POST` | `/api/report/:id/upvote` | Upvote report | None |

---

## 🔄 **Real-Time Features**

<div align="center">

### WebSocket Events

</div>

| Event | Direction | Description |
|-------|-----------|-------------|
| `new-report` | Server → Client | Broadcast new submissions |
| `report-updated` | Server → Client | Notify upvotes/changes |
| `user-connected` | Client → Server | Track active users |

---

## 🗃️ **Database Schemas**

<details>
<summary>👤 <strong>User Model</strong></summary>

```javascript
{
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

</details>

<details>
<summary>📋 <strong>Report Model</strong></summary>

```javascript
{
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000
  },
  category: {
    type: String,
    enum: ['Weather', 'Infrastructure', 'Agriculture', 'Emergency'],
    required: true
  },
  severity: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  images: [String],
  anonymous: {
    type: Boolean,
    default: false
  },
  reporterId: {
    type: ObjectId,
    ref: 'User',
    default: null
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'approved'
  },
  upvotes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

</details>

---

## 🎨 **Screenshots & Demo**

<div align="center">

### 🖥️ **Main Dashboard**
*Real-time weather monitoring with interactive visualizations*

![Main Dashboard](https://github.com/user-attachments/assets/0027d6bd-7d39-4431-aae6-5e3b77036a5a)

### 📱 **Live Updates**
*Community reporting with instant notifications*

![Live Updates](https://github.com/user-attachments/assets/522c44c7-58c6-4ffb-b9e8-409165caff51)

</div>

---

## 🛣️ **Future Enhancements**

<div align="center">

### 🎯 **Planned Features**

</div>

- [ ] 🗺️ **Interactive Map Integration** - Visual report plotting with geographic clustering
- [ ] ⚙️ **Admin Dashboard** - Content moderation and user management
- [ ] 👤 **User Profiles** - Personal history and achievement tracking  
- [ ] 📱 **Push Notifications** - Instant alerts for critical weather events
- [ ] 🔍 **Advanced Search** - AI-powered content discovery and filtering
- [ ] 📈 **Analytics Dashboard** - Detailed insights and reporting trends
- [ ] 🌐 **Multi-language Support** - Accessibility for diverse communities
- [ ] 🤝 **Integration APIs** - Connect with external weather services

---

## 📄 **License**

<div align="center">

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

**MIT License © 2025 Pratik Mohanty**

*Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction.*

</div>

---

## 👨‍💻 **Author & Contact**

<div align="center">

### **Raj Pratik (Pratik Mohanty)**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Pratiktech957)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pratik-mohanty-tech)

*Building technology that bridges communities and saves lives through intelligent weather insights.*

---

### 🌟 **Star this repository if you found it helpful!**

</div>

---

<div align="center">

**Made with ❤️ for farmers, communities, and weather enthusiasts worldwide**

*Empowering both urban and rural areas with equal access to critical weather intelligence*

</div>
