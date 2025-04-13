

# Johannes Nguyen Portfolio

This is the source code for my personal tech portfolio, containerized using Docker. The app is set up to run in a lightweight and stable development environment with automatic health checks and live source code syncing.

🔗 **Live Project:** [j551n.com](https://j551n.com)

---

## 🚀 Project Overview

This portfolio showcases my technical projects, skills, and experience. It’s built to be easily deployed and maintained using Docker.

---

## 🐳 Dockerized Setup

This project uses Docker Compose for container orchestration.

### 🧱 Docker Compose Configuration

```yaml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: johannes-nguyen-portfolio
    ports:
      - "8080:8080"
    restart: unless-stopped
    volumes:
      - ./src:/app/src
    healthcheck:
      test: ["CMD", "wget", "--spider", "-q", "http://localhost:8080"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### 📦 Features

- 🔄 **Hot-reloading:** Local source code (`./src`) is mounted directly into the container for seamless development.
- ♻️ **Auto-restart:** Automatically restarts if the container stops unexpectedly.
- 💡 **Healthcheck:** Ensures the app is healthy and responding on port `8080`.

---

## 🛠️ Getting Started

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Run the App

```bash
git clone https://github.com/j551n-ncloud/tech-portfolio-builder-de.git
cd tech-portfolio-builder-de
docker-compose up --build
```

Open [http://localhost:8080](http://localhost:8080) in your browser to view the portfolio.

---

## 📁 Project Structure

```
.
├── Dockerfile
├── docker-compose.yml
└── src/
    └── [Your portfolio source code]
```

---

## 🤝 Contributing

Feel free to fork the repo and submit pull requests! Suggestions and improvements are always welcome.

---

## 🧾 License

This project is licensed under the MIT License.

