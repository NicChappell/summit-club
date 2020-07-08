// require express
var express = require('express');

// create an express app
var app = express();

// configure PORT
var PORT = process.env.PORT || 8080;

// require models for syncing
var db = require('./models');

// configure middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// define static directory
app.use(express.static('public'));

// import routes
var apiRoutes = require('./routes/api-routes.js');
var htmlRoutes = require('./routes/html-routes.js');
var redirectRoutes = require('./routes/redirect-routes.js');

// configure routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);
app.use('/r', redirectRoutes);

// connect to database and start server
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log('App listening at http://localhost:' + PORT);
    });
});
