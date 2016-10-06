var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index.jade', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
	res.render('about.jade', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
	res.render('contact.jade', { title: 'Contact' });
});
router.get('/factorial', function(req, res, next) {
	res.render('factorial.jade', { title: 'Contact' });
});


module.exports = router;
