//importing modules
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

const route = require('./routes/route');

//port number
const port = 3000;

//adding middleware - cors
app.use(cors());

//body - parser
app.use(bodyparser.json());

//route
app.use('/api', route);

//testing server
app.get('/', (req, res) => {
    res.send('Homepage ready');
});

app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});