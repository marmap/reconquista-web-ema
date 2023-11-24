import { Sequelize } from "sequelize";

const db = new Sequelize('publicaciones', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db