import console from "console";
import { Sequelize } from "sequelize";
import { config } from "dotenv";
config({ path: "../.env" });
export const sequelizeDB = new Sequelize(
  "jorgeluispenareal_prueba",
  "254084_root	",
  "gB0az0YYqK7wsSG",
  {
    host: "mysql-jorgeluispenareal.alwaysdata.net",
    dialect: "mysql",
  }
);
