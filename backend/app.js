const express = require("express");
const cors = require("cors");
const {nanoid} = require("nanoid");

var app = express()
app.use(cors())

var sessions = {
    sessionId: sessionId = nanoid(10)
}

app.post('/', function(req, res) {
    res.send(sessions)
});

app.listen(8000, function () {
    console.log('CORS-enabled web server listening on port 8000');
});

