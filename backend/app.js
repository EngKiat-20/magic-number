// Import express, cors and nanoid
const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid');

// Creating the app and enabling cors
const app = express();
app.use(cors());

// Creating sessions object as global variable.
const sessions = {};

// Middleware for creating new session
app.post('/', function (req, res) {
    // Generating a new session Id
    const sessionId = nanoid(10);

    // Set sessionId as new key of sessions object, set the value to 1
    sessions[sessionId] = 1;

    // sending a response, treat the parameter provided as JSON
    // and convert the parameter to JSON string and put it in the response body
    res.json({
        session_id: sessionId,
    });
});

// Start listening to port 8000
app.listen(8000, function () {
    console.log('Magic Number Game app listening on Port 8000');
});