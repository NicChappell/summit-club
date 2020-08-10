// dependencies
var express = require('express');

// configure dotenv
require('dotenv').config();

// new express app
var app = express();

// define PORT
var PORT = process.env.PORT || 5000;

// configure middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// configure static directory
app.use(express.static('public'));

// define routes
var apiRoutes = require('./routes/api-routes.js');
var htmlRoutes = require('./routes/html-routes.js');

// configure routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// start server
app.listen(PORT, function () {
    console.log('App listening at http://localhost:' + PORT);
});
