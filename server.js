// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App

var mongoose = require('mongoose');

var path = require('path')
var port = 8000


// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Point server to views
app.set('views', path.join(__dirname, 'views'));

// We're using ejs as our view engine
app.set('view engine', 'ejs');

require('./config/mongoose.js');

var routes_setter = require('./config/routes.js')
routes_setter(app);

app.listen(port, function(){
    console.log("Listening on port 8000...")
});