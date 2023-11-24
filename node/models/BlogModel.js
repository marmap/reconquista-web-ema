import db from "../database/db.js";

import { DataTypes } from "sequelize";

const BlogModel = db.define('noticias',{
    titulo:{type: DataTypes.STRING},
    resumen:{type: DataTypes.STRING},
    cuerpo:{type: DataTypes.STRING},
    foto_url:{type: DataTypes.STRING},
    createdAt:{type: DataTypes.NUMBER},
    updatedAt:{type: DataTypes.NUMBER}
})

export default BlogModel