const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  // defino el modelo
  sequelize.define('Cursos', {
    

    nombre: {  //Es el título del curso
      type: DataTypes.STRING,
      allowNull: false,
    },

    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
   

  });
};