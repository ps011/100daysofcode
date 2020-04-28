var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
    }
});

/* POST for sending email. */
router.get('/', function(req, res, next) {
   res.render('send');
});

/* POST for sending email. */
router.post('/send', function(req, res, next) {
    var mailOptions = {
        from: 'techdom11471@gmail.com',
        to: req.body.email,
        subject: req.body.subject ,
        text: req.body.body
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Mail Sent!!');
        }
    });
});

module.exports = router;
