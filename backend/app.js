const express = require("express");
const cors = require("cors");
const {nanoid} = require("nanoid");

var app = express()
app.use(cors())

app.post('/', function(req, res) {
    res.send('Session has been created')
})
;
app.listen(8000, function () {
    console.log('CORS-enabled web server listening on port 8000');
});

sessionId = nanoid(10);
var sessions = {
    sessionId: 1
}