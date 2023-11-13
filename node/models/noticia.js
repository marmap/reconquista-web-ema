import dbConfig from '../database/dbConfig'; 
import { Sequelize, DataTypes } from "sequelize";

const noticia = dbConfig.define('publicaciones', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  resumen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cuerpo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  foto_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_publicacion: {
    type: DataTypes.DATE,
    allowNull: false
  },

  
});


export default noticia;

