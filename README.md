# Bookstore

![](client/public/logo-addbg-preview.png)

A Full-Stack web app project displaying a Bookstore catalog.

# Getting Started

To run the project client + server in development MODE you need to:

Manually:

- Clone the repo.
- Open new terminal for server
- Run: "cd server && npm set legacy-peer-deps true && npm i && npm run huskyInit && npm run dev"
- Open new terminal for client
- Run: "cd client && npm i && npm run huskyInit && npm run dev:development
- open http://localhost:3000

Automatically:

- Clone the repo.
- Install VS Code extension: "Restore Terminals" from link: https://marketplace.visualstudio.com/items?itemName=EthanSK.restore-terminals
- Open the file: "Bookstore.code-workspace". It will open vs code with 2 terminals for server + client, navigate to the folders directory, install npm packages and start the applications. A new window of your default browser will open at "http://localhost:3000" - the default start page of the client.
