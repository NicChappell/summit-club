// require express
var express = require('express');

// require models
var db = require('../models');

// create an express router
var router = express.Router();

// @route:  GET /api/visits
// @desc:   Select all visit records
router.get('/visits', function (req, res) {
    db.visit.findAll({})
        .then(function (result) {
            res.json(result);
        })
        .catch(function (err) {
            console.log(err);
        });
})

// @route:  GET /api/fourteeners
// @desc:   Select all fourteener records
router.get('/fourteeners', function (req, res) {
    db.fourteener.findAll({
        where: {
            fourteener: 'Y'
        }
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
    });
})

// @route:  POST /api/fourteeners
// @desc:   Bulk create all fourteeners
router.post('/fourteeners', function (req, res) {
    db.fourteener.bulkCreate(req.body, { returning: true })
        .then(function (result) {
            res.json(result);
        })
        .catch(function (err) {
            console.log(err);
        });
})

module.exports = router;
