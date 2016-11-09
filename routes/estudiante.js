var express = require('express');
var router = express.Router();
var models = require('../models/Estudiante');

router.get('/', function(req, res, next) {
	res.render('inicio', { title: 'UTP' });
});

// router.get('/crear', function(req, res, next) {
//   res.render('crear.jade', { title: 'UTP' });
// });

router.get('/crear', function(req, res) {
  models.Estudiante.create({
    nombre: req.body.nombre,
    apellido: req.body.apellido
  }).then(function() {
   res.json(estudiante);
  });
});

router.get('/listar', function(req, res, next) {
	res.render('listar.jade', { title: 'UTP' });
});


module.exports = router;