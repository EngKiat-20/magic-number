const express = require("express");
const cors = require("cors");
const nanoId = require("nanoid");
var app = express()

app.use(cors())

app.post('http://localhost:8000/', function() {
    
})

app.listen(8000, function () {
    console.log('CORS-enabled web server listening on port 8000')
  })