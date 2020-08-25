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

// define routes
var apiRoutes = require('./routes/api-routes.js');

// configure routes
app.use('/api/v1/', apiRoutes);

// start server
app.listen(PORT, function () {
    console.log('App listening at http://localhost:' + PORT);
});
