var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index.jade', { title: 'UTP' });
});

router.get('/about', function(req, res, next) {
	res.render('about.jade', { title: 'Acerca de' });
});

router.get('/contact', function(req, res, next) {
	res.render('contact.jade', { title: 'Contacto' });
});

router.get('/factorial', function(req, res, next) {
	res.render('factorial.jade', { title: 'Factorial' });
});

router.get('/bubblesort', function(req, res, next) {
	res.render('bubblesort.jade', { title: 'Bubblesort' });
});
router.get('/primos', function(req, res, next) {
	res.render('primos.jade', { title: 'Primos' });
});

module.exports = router;
