// Pull in required dependencies
var express = require('express');
var router = express.Router();
var db = require("../models");

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));



//Create the routes and associated logic
router.get('/', function(req, res) {
    db.Burgers.findAll({}).then(
        function(data) {
            res.render("index", { burgers: data });
        }
    );
});

router.post('/burgers', function(req, res) {
    db.Burgers.create({
            burger_name: req.body.burger_name,
        })
        .then(function(data) {
            // res.json(data);
            res.redirect('/');
        });

});

router.put('/burgers/:id', function(req, res) {

    db.Burgers.update({
        devoured: true
    }, {
        where: { id: req.params.id }
    }).then(function(data) {
        res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;