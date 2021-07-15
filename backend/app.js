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

app.put('/:sessionId', function (req, res) {

    const sessionId = req.params.sessionId;

    const attempt = req.query.attempt;

    const attemptNumber = Number(attempt);

    if (Number.isNaN(attemptNumber)) {

        return res.status(400).json({
            error: `Attempt (${attempt}) is Not a Number!`,
        });
    }

    if (!Number.isInteger(attemptNumber)) {
        return res.status(400).json({
            error: `Attempt (${attempt}) is Not an Integer!`,
        });
    }

    if (attemptNumber < 0) {
        return res.status(400).json({
            error: `Attempt (${attempt}) is Not a Positive Integer!`,
        });
    }

    const magicNumberGame = sessions[sessionId];

    const progress = magicNumberGame.guess(attempt);

    return res.json(progress);
});
