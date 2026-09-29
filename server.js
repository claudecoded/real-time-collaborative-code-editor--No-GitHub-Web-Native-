// Install dependencies first: npm install express socket.io
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Store document states in memory
let documentBuffer = "// Welcome to GitHub Live Editor clone.\n// Start typing to collaborate in real-time!\n";

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);
    
    // Send the current code state to the newly connected user
    socket.emit('init-code', documentBuffer);

    // Broadcast changes to all other connected clients
    socket.on('code-change', (updatedCode) => {
        documentBuffer = updatedCode;
        socket.broadcast.emit('code-update', updatedCode);
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

server.listen(PORT, () => {
    console.log(`Collaborative Server running on http://localhost:${PORT}`);
});
