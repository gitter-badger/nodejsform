var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

router.post('/', function(req, res) {

    req.assert('username', 'Name is required').len(6, 20);
    req.assert('email', 'A valid email is required').isEmail();
    req.assert('message', 'Message is required').len(6, 20);

    var errors = req.validationErrors(true);

    if( !errors){
        console.log(errors);

        sendFeedback(req.body.username, req.body.email, req.body.message);

        res.render('index', { errors: {} });

    } else {
        console.log(errors);
        res.render('index', { errors: errors });
    }

});

function sendFeedback(user, email, message) {

    var transporter  = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'nodejsform@gmail.com',
            pass: 'nodejs112'
        }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'nodejsform@gmail.com',
        to: 'jukka@rautanen.info, sopheak.kong@metropolia.fi, joonas.m.merilainen@metropolia.fi',
        subject: 'Message from '+ user, // Subject line
        text: message + ' '+ email // plaintext body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }});
}

module.exports = router;
