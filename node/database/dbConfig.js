import { Sequelize } from 'sequelize';

const dbConfig = new Sequelize('publicaciones', 'root', '',{
  host:'localhost',
  dialect: 'mysql2'
})


export default dbConfig;

