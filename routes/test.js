var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/', function(req, res, next) {
  res.render('test/test', { title: 'Test server' });
});

module.exports = router;
