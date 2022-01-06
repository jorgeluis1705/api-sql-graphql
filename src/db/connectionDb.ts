import { Sequelize } from "sequelize";

export const sequelizeDB = new Sequelize("Prueba", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});
