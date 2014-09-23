var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {

    console.log(req.body.username);

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
