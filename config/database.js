import { Sequelize } from 'sequelize';

const db = new Sequelize("crud_app1", 
"ReactCrud1", "HesloDoDB123",
{ host: "localhost", 
  dialect: "mysql"
} );

export default db;