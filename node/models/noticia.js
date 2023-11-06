import dbConfig from '/node/database/dbConfig';
import { Sequelize, DataTypes } from "sequelize";

const noticia = dbConfig.define('publicaciones', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false // Agregado para indicar que el campo no puede ser nulo
  },
  resumen: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cuerpo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  foto_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  fecha_publicacion: {
    type: DataTypes.DATE,
    allowNull: true
  },
});

export default noticia;

