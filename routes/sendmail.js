/**
 * Created by Sopheak Kong on 23/09/14.
 */

router.post('/', function (request, response) {

    console.log(request.body.username);

});

/*
function (token, user, done) {
    var smtpTransport = nodemailer.createTransport('SMTP', {
        service: 'Gmail',
        auth: {
            user: 'nodejsform',
            pass: 'nodejs112'
        }
    });
}*/