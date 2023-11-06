import { Sequelize } from 'sequelize';

const dbConfig = new Sequelize('publicaciones', 'Marcos', '',{
  host:'localhost',
  dialect: 'mysql'
})

export default dbConfig;

