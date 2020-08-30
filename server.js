// dependencies
var express = require('express');
var mongoose = require('mongoose');

// configure dotenv
require('dotenv').config();

// new express app
var app = express();

// define PORT
var PORT = process.env.PORT || 5000;

// configure middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// define api routes
var apiRoutes = require('./routes/api/v1');

// configure api routes
app.use('/api/v1/', apiRoutes);

// configure database
const db = process.env.MONGO_URI;

// connect to database
mongoose.connect(db, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => console.log('connected to database'))
    .catch(err => console.log(err, 'error connecting to database'))

// start server
app.listen(PORT, function () {
    console.log('App listening at http://localhost:' + PORT);
});
