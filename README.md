# 🚗 Virtual Tyre Torque Sensor Web App

A fully Dockerized full-stack application that simulates and visualizes **virtual torque sensor values** from all four tyres of a vehicle in real time. Built with **React**, **Node.js/Express**, and deployed using **Docker Hub**, **GitHub Actions (CI/CD)**, and **Render.com**.

---

## 📌 Table of Contents
- [Features](#features)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [CI/CD Pipeline](#cicd-pipeline)
- [Docker Images](#docker-images)
- [Setup Instructions](#setup-instructions)
- [Developer Notes](#developer-notes)
- [License](#license)

---

## ✨ Features

- Simulates torque values for all four tyres
- Real-time sensor data fetch
- Responsive, card-based UI
- Dockerized frontend & backend
- CI/CD integration with GitHub Actions
- Automatically builds and pushes to Docker Hub
- Live deployment on Render (FREE tier)

---

## 🌐 Live Demo

| Service    | Link                                            |
|------------|-------------------------------------------------|
| Frontend   | [Visit Frontend ↗](https://torque-frontend.onrender.com)           |
| Backend    | [Visit API ↗](https://torque-backend.onrender.com/api/torque)                 |
| GitHub     | [Repo ↗](https://github.com/sberaconnects/virtual-sensor-app)                         |
| CI/CD Logs | [GitHub Actions ↗](https://github.com/sberaconnects/virtual-sensor-app/actions)            |

---

## 🧰 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Containerization**: Docker, Docker Hub
- **CI/CD**: GitHub Actions
- **Hosting**: Render.com (Web Services)

---

## 🗂️ Project Structure

```
virtual-sensor-app/
├── backend/         # Express API server
│   └── Dockerfile
├── frontend/        # React frontend UI
│   └── Dockerfile
├── .github/
│   └── workflows/   # GitHub Actions CI/CD
│       └── docker-ci-cd.yml
├── docker-compose.yml (optional local setup)
└── README.md
```

---

## ⚙️ CI/CD Pipeline

This project uses **GitHub Actions** to:

- Build frontend & backend Docker images
- Log in securely to Docker Hub using secrets
- Push images to Docker Hub repositories
- Triggered automatically on every push to `main`

🔗 View pipeline logs here: [GitHub Actions ↗](https://github.com/sberaconnects/virtual-sensor-app/actions)

---

## 🐳 Docker Images

- 🔧 Backend → [torque-backend on Docker Hub](https://hub.docker.com/r/sberaconnects/torque-backend)
- 💻 Frontend → [torque-frontend on Docker Hub](https://hub.docker.com/r/sberaconnects/torque-frontend)

> These images are auto-built and updated using CI/CD pipeline.

---

## 🚀 Setup Instructions (Local Dev)

```bash
# Clone the repo
git clone https://github.com/sberaconnects/virtual-sensor-app
cd virtual-sensor-app

# Start backend
cd backend
npm install
npm start

# In another terminal - start frontend
cd ../frontend
npm install
npm start
```

Or use Docker (after setting .env and ports):

```bash
docker-compose up --build
```

---

## 💬 Developer Notes

- This project demonstrates **end-to-end DevOps integration** from development to deployment.
- CI/CD pipeline is **fully automated** using GitHub Actions.
- Docker images are pushed to Docker Hub using a secure access token.
- Hosting is done using **Render's Docker image support** for both services.

---

## 🪪 License

This project is open-sourced for educational and demo purposes under the MIT License.

📅 Generated on: 2025-04-08