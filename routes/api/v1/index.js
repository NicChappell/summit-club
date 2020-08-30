// dependencies
var express = require('express');

// new router
var router = express.Router();

// configure router
router.use('/fourteeners', require('./fourteeners'));
router.use('/users', require('./users'));

module.exports = router;