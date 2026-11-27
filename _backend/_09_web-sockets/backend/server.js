import 'dotenv/config';
import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { setupSocket } from './sockets/socket.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// 1. Express ko Node ke http server se joda (Socket.IO ke liye zaroori hai)
const httpServer = http.createServer(app);

// 2. public folder ki HTML file browser me dikhane ke liye
app.use(express.static(path.join(__dirname, 'public')));

// 3. Socket.IO setup function call kiya
setupSocket(httpServer);

// 4. Server start kiya (app.listen nahi, httpServer.listen!)
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
