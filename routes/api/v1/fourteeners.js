// dependencies
var express = require('express');

// models
var db = require('../../../models')

// new router
var router = express.Router();

// @route:  GET /api/fourteeners
// @desc:   Select all fourteener records
router.get('/', function (req, res) {
    db.Fourteener.find({})
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
});

// @route:  POST /api/fourteeners
// @desc:   Create new fourteener records
router.post('/', function (req, res) {
    db.Fourteener.create(req.body)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
});

// @route:  GET /api/fourteeners/:slug
// @desc:   Select single fourteener record
router.get('/:slug', function (req, res) {
    db.Fourteener.find({ slug: req.params.slug })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
