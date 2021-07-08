const express = require("express");
const cors = require("cors");
const {nanoid} = require("nanoid");

var app = express()
app.use(cors())

const sessions = {}

app.post('/', function(req, res) {
    const sessionId = nanoid(10)
    sessions[sessionId] = 1

    res.json({
        session_id: sessionId
    })
});

app.listen(8000, function () {
    console.log('CORS-enabled web server listening on port 8000');
});

