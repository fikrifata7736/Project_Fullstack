import {Sequelize} from "sequelize";

const db = new Sequelize('project_crud_fikri','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;