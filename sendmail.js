/**
 * Created by Sopheak Kong on 23/09/14.
 */

/* Sending email */

function (token, user, msg) {


}

/*
function(token, user, done) {
    var smtpTransport = nodemailer.createTransport('SMTP', {
        service: 'SendGrid',
        auth: {
            user: '!!! YOUR SENDGRID USERNAME !!!',
            pass: '!!! YOUR SENDGRID PASSWORD !!!'
        }
    });
    var mailOptions = {
        to: user.email,
        from: 'passwordreset@demo.com',
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            'http://' + req.headers.host + '/reset/' + token + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    };
    smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
    });
}
], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
});
});
    */