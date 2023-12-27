const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Define the route for the root URL
app.get('/', (req, res) => {
    // Use path.join to construct the correct file path
    const filePath = path.join(__dirname, 'app.js');
    
    // Use res.sendFile to send the file
    res.sendFile(filePath);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
