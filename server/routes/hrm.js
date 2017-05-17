var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin@ds133221.mlab.com:33221/hrm_sample');
var nodemailer = require('nodemailer');
// var xoauth2 = require('xoauth2');

router.get('/candidates', function(req, res, next) {
    console.log('candidates...');
    db.candidates.find(function(err, candidates) {
        console.log('candidates:', candidates.length);
        if (err) {
            console.error('error');
        }
        res.json(candidates);
    });
});

router.get('/candidates/schedule', function(req, res, next) {
    console.log('schedule..........');
    // let subject = req.body.subject;
    // let description = req.body.description;
    /* let transporterOauth = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                xoauth2: xoauth2.createXOAuth2Generator({
                    user: 'shivtest2017@gmail.com',
                    clientId: '630960946565-peof6eu3g09udabk0k9q62rbjjjjdah1.apps.googleusercontent.com',
                    clientSecret: 'SYKMp337-RlHfcD3U-s3scpk',
                    refreshToken: ''
                })
            }
        });*/
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shivtest2017@gmail.com',
            pass: 'Test@123'
        }
    });
    let mailOptions = {
        from: '"ShivKumar Agarwal" <shivtest2017@gmail.com>',
        to: 'shiv.agarwal08@gmail.com',
        subject: 'Hello from Phone Catalog',
        text: 'Welcome to Phone Catalog!',
        html: '<b>Welcome to Phone Catalog!!!</b>'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

});

router.post('/candidates', function(req, res, next) {
    console.log('candidate add...', req.body);
    db.candidates.insert(req.body, function(err, candidate) {
        console.log('candidate:', candidate);
        if (err) {
            console.error('error');
        }
        res.json(candidate);
    });
});

router.get('/candidates/:_id', function(req, res, next) {
    console.log('_id:', req.params._id);
    db.candidates.findOne({ _id: mongojs.ObjectId(req.params._id) }, function(err, candidate) {
        console.log('response candidate _id:', candidate._id);
        console.log('response candidate panCard:', candidate.panCard);
        if (err) {
            console.error('error');
        }
        res.json(candidate);
    });
});

router.put('/candidates/:panCard', function(req, res, next) {
    console.log('panCard:', req.params.panCard);
    console.log('body:', req.body);
    db.candidates.save({ panCard: req.params.panCard }, function(err, candidate) {
        console.log('response candidate panCard:', candidate.panCard);
        if (err) {
            console.error('error');
        }
        res.json(candidate);
    });
});

module.exports = router;