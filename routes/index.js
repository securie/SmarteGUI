var express = require('express');
var router = express.Router();

/* GET home page. */
var data = require("../data.json");
console.log(data);
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', data: data });
});

module.exports = router;
