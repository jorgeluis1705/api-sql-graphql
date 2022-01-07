"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeDB = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: "../.env" });
exports.sequelizeDB = new sequelize_1.Sequelize(process.env.DB_NAME || "Prueba", process.env.DB_USER || "root", process.env.DB_PASSWORD || "root", {
    host: process.env.DB_HOST,
    dialect: "mysql",
});
