# GitHub Live - Real-Time Collaborative Code Editor 🚀

A functional, lightweight real-time collaborative code editor built to bridge the gap of live, multi-user coding directly within a web interface—a feature currently missing natively in standard GitHub web instances.

This project utilizes **Node.js**, **Express**, and **Socket.io** to establish a persistent bi-directional WebSocket network, syncing every keystroke across all connected peers seamlessly.

## ✨ Features

- **Real-Time Synchronization:** Any character typed is immediately broadcast to all other active developers.
- **Cursor Position Retention:** Automatically preserves your cursor index and selection range when external updates are received.
- **Visual Connection Status:** Live indicator showing whether you are actively connected to the collaboration cluster.
- **Dark Mode UI:** Theme designed using native GitHub colors (`#0d1117`) for a seamless visual ecosystem.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express Framework
- **Real-Time Communication:** Socket.io (WebSockets)
- **Frontend:** Semantic HTML5, CSS3 Variables, Vanilla JavaScript

## 🚀 Getting Started

Follow these steps to get your local real-time collaborative instance up and running.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org) installed (v16 or higher recommended).

### Installation

1. Create a project folder on your machine and navigate into it:
   ```bash
   mkdir github-live-editor
   cd github-live-editor
   ```

2. Create the project structure:
   ```bash
   mkdir public
   ```

3. Save the backend code as `server.js` and the frontend code inside `public/index.html` (use the source codes provided in the main guide).

4. Initialize the Node.js project and install the required dependencies:
   ```bash
   npm init -y
   npm install express socket.io
   ```

### Running the Server

Start the collaboration daemon by running:
```bash
node server.js
```

Once started, you will see the following output in your terminal:
```text
Collaborative Server running on http://localhost:3000
```

### Simulating Multi-User Collaboration

1. Open your browser and navigate to `http://localhost:3000`.
2. Open a **second browser window** (or an Incognito session) and go to the same URL.
3. Type anything in window A; you will see it update instantly in window B without losing your cursor context!

## 🧩 How It Works under the Hood

1. **Connection Init (`init-code`):** When a new developer joins, the Node.js server transmits the current state of the global `documentBuffer` string so the client isn't empty.
2. **Dynamic Broadcast (`code-change`):** As the user inputs text, an event fires payload streams through WebSockets. 
3. **Selective Update (`code-update`):** The server receives the text update and broadcasts it to all *other* connected sockets via `socket.broadcast.emit`, reducing redundant server echo loops.

## 📝 License

This project is open-source and available under the MIT License.
