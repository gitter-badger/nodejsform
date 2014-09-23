var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {

  req.assert('username', 'Name is required').notEmpty();
  req.assert('email', 'A valid email is required').isEmail();
  req.assert('message', 'Message is required').notEmpty();

  var errors = req.validationErrors(true);

  var values = {
    'username': req.body.username || '',
    'email': req.body.email || '',
    'message': req.body.message || ''
  };

   if( !errors){

     values = {
      'username': '',
      'email': '',
      'message': ''
    };

     res.render('index', { errors: false, values: values });
   } else {
     res.render('index', { errors: errors, values: values });
   }



});

function sendmail (user, email, message) {
    var smtpTransport = nodemailer.createTransport('SMTP', {
        service: 'Gmail',
        auth: {
            user: 'nodejsform@gmail.com',
            pass: 'node112'
        }
    });

    var mailOptions = {
        From: 'nodejsform@gmail.com',
        To: '',
        subject: 'Hello '+ user, // Subject line
        text: message // plaintext body
    }
}

module.exports = router;
