var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {

  req.assert('name', 'Name is required').notEmpty();
  req.assert('email', 'A valid email is required').isEmail();

  var errors = req.validationErrors();

   if( !errors){
     console.log('valid');
   } else {
     console.log(errors);
   }

   res.render('index', { title: 'Express', errors: errors });

});

module.exports = router;
