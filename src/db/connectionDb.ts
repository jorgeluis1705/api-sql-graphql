import { Sequelize } from "sequelize";
require("dotenv").config({ path: "../.env" });
export const sequelizeDB = new Sequelize(
  process.env.DB_NAME || "Prueba",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "root",
  {
    host: process.env.DB_HOST || "localhost",
    port: 3306,
    dialect: "mysql",
  }
);
