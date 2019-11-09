//importing modules
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

const route = require('./routes/route');

/* Connection to DB */
mongoose.connect('mongodb://localhost:27017/contactlist', {useNewUrlParser: true });


/* Successfull Connection */
mongoose.connection.on('connected', () => {
    console.log('Successfully connected to MongoDB');
});

/* Failed Connection */
mongoose.connection.on('error', (err) => {
    if(err){
        console.log(`MongoDB connection error: ${err}`);
    }
});

//port number
const port = 3000;

//adding middleware - cors
app.use(cors());

//body - parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//route
app.use('/api', route);

//testing server
app.get('/', (req, res) => {
    res.send('Homepage ready');
});

app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});