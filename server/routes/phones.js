var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin@ds117311.mlab.com:17311/phone_catalog');

router.get('/phonelist', function(req, res, next) {
    console.log('phonelist');
    db.phonelist.find(function(err, phonelist) {
        console.log('phonelist:', phonelist.length);
        if (err) {
            console.error('error');
        }
        res.json(phonelist);
    });
});

router.get('/:id', function(req, res, next) {
    console.log('id:', req.params.id);
    db.phones.findOne({ id: req.params.id }, function(err, phone) {
        console.log('response phone id:', phone.id);
        if (err) {
            console.error('error');
        }
        res.json(phone);
    });
});

module.exports = router;