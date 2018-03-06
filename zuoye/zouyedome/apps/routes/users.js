var express = require('express');
var router = express.Router();
var u=require('../models/user.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  u.find({}, function(err, docs) {
    res.json(docs)
})
});

module.exports = router;
