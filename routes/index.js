var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  var values = {
    'username': req.body.username || '',
    'email': req.body.email || '',
    'message': req.body.message || ''
  };

  res.render('index', { errors: {
    'username' : {},
    'email' : {},
    'message' : {}
  } , values: values });
});

module.exports = router;
