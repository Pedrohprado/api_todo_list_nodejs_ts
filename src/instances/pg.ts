import sequelize = require('sequelize');
import dotenv = require('dotenv');

dotenv.config();

export const db = new sequelize.Sequelize(
  process.env.PG_DB as string,
  process.env.PG_USER as string,
  process.env.PG_PASSWORD as string,
  {
    dialect: 'postgres',
    port: parseInt(process.env.PG_PORT as string),
  }
);
