'use strict';
module.exports = function(sequelize, DataTypes) {
  var Estudiante = sequelize.define('Estudiante', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    cedula: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Estudiante;
};