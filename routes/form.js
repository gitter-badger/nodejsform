var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {

  req.assert('username', 'Name is required').len(6, 20);
  req.assert('email', 'A valid email is required').isEmail();
  req.assert('message', 'Message is required').len(6, 20);

  var errors = req.validationErrors(true);

   if( !errors){
     console.log(errors);
     res.render('index', { errors: {} });
   } else {
     console.log(errors);
     res.render('index', { errors: errors });
   }

});

module.exports = router;
