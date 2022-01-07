import console from "console";
import { Sequelize } from "sequelize";
import { config } from "dotenv";
config({ path: "../.env" });
export const sequelizeDB = new Sequelize(
  process.env.DB_NAME || "Prueba",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "root",
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);
