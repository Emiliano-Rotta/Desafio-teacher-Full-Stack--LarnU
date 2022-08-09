const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  // defino el modelo
  sequelize.define('Cursos', {
    
    // id: {
    //   type: DataTypes.UUID, 
    //   defaultValue: DataTypes.UUIDV4,
    //   allowNull: false,
    //   primaryKey: true
    // },

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
    
    //En vez de eliminar el curso, lo deshabilitamos, para que no se vea mas pero que siga estando en la base de datos para el futuro.
    deshabilitar: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },

  });
};