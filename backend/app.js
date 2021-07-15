const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid');
const createHttpError = require('http-errors');

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

app.put('/:sessionId', function (req, res, next) {

    const sessionId = req.params.sessionId;

    const attempt = req.query.attempt;

    const attemptNumber = Number(attempt);

    if (Number.isNaN(attemptNumber)) {
        return next(createHttpError(400, `Attempt (${attempt}) is Not an Number!`)); 
    }

    if (!Number.isInteger(attemptNumber)) {
        return next(createHttpError(400, `Attempt (${attempt}) is Not an Integer!`));
    }

    if (attemptNumber < 0) {
        return next(createHttpError(400, `Attempt (${attempt}) is Not a Positive Integer!`));
    }

    if (!sessions[sessionId]) {
        return next(createHttpError(400, `Attempt (${sessionId}) not found!`));
    }

    const magicNumberGame = sessions[sessionId];

    const progress = magicNumberGame.guess(attempt);

    return res.json(progress);
});

app.use(function (req, res, next) {
    return next(createHttpError(404, `Not found ${req.method} ${req.originalUrl}`));
});

app.use(function (err, req, res, next) {
    const status = err.status || 500;
    const message = err.message || 'Unknown Error';
    console.log(err);
    return res.status(status).json({
        error: message,
    });
});

app.listen(8000, function () {
    console.log('Magic Number Game app listening on Port 8000');
});