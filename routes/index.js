// Handles the page routing
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {ready: "Not ready"});
});

router.get('/timetable', function(req, res, next) {
  res.render('timetable');
});

module.exports = router;
