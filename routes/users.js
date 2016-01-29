var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function(e, result) {
    res.contentType('application/json');
    res.send(result);
    });
});

module.exports = router;
