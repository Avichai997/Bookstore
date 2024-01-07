# Bookstore

![](client/public/logo.png)

A Full-Stack Bookstore catalog web app.

# Getting Started

To run the project client + server in development MODE you need to:

Manually:

- Clone the repo.
- Open new terminal for server
- Run:
  ```
  cd server && npm set legacy-peer-deps true && npm i && npm run seed && npm run dev
  ```
- Open new terminal for client
- Run:
  ```
  cd client && npm set legacy-peer-deps true && npm i && npm run huskyInit && npm run dev:development
  ```
- open http://localhost:3000

Automatically:

- Clone the repo.
- Install VS Code extension: "Restore Terminals" from link: https://marketplace.visualstudio.com/items?itemName=EthanSK.restore-terminals
- Open the file: "Bookstore.code-workspace". It will open vs code with 2 terminals for server + client, navigate to the folders directory, install npm packages and start the applications. A new window of your default browser will open at "http://localhost:3000" - the default start page of the client.

Tests:

- Run:
  ```
  cd client && npm run test:once
  ```

## Prerequisites

### Node:

- [Node.js](https://nodejs.org/) installed on your machine.

* Version: v18.12.1

### Npm :

- [npm](https://nodejs.org/) installed on your machine.

* Version : 8.19.2

### React:

- Version: 18.2.0

Before you begin working on this project, ensure that your development machine has the following software installed. Follow the provided URLs for installation instructions.

| Type            | Name               | Version        | URL                                                                       |
| --------------- | ------------------ | -------------- | ------------------------------------------------------------------------- |
| Database System | MongoDB            | Latest Version | [Download MongoDB](https://www.mongodb.com/try/download/community)        |

### Installation Instructions:

1. **Visual Studio Code:**

   - Download and install the latest version of [Visual Studio Code](https://code.visualstudio.com/download).
   - Open Visual Studio Code and install any necessary extensions for your project.

2. **MongoDB:**
   - Download and install the latest version of [MongoDB](https://www.mongodb.com/try/download/community).
   - Follow the installation instructions for your operating system.
   - Ensure that the MongoDB service is running.
