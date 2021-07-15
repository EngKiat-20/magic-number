const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid');

const MagicNumberGame = require('../logic/MagicNumberGame');

const app = express();
app.use(cors());

const sessions = {};

app.post('/', function (req, res) {

    const sessionId = nanoid(10);
    sessions[sessionId] = 1;
    sessions[sessionId] = new MagicNumberGame(100);

    res.json({
        session_id: sessionId,
    });
});

app.listen(8000, function () {
    console.log('Magic Number Game app listening on Port 8000');
});