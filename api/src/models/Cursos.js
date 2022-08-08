const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Cursos', {
    
    id: {
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },

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
    
    deshabilitar: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },

  });
};
