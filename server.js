const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Kasatria server is running' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`
███████████████████████████████████████████████
██          KASATRIA VISUALIZATION          ██
███████████████████████████████████████████████
🚀 Server running at: http://localhost:${PORT}
📊 Open your browser to view the visualization
📁 Project folder: ${__dirname}
    `);
});