"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const connectionDb_1 = require("./../db/connectionDb");
const sequelize_1 = require("sequelize");
exports.UserModel = connectionDb_1.sequelizeDB.define("User", {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellidoPaterno: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellidoMaterno: {
        type: sequelize_1.DataTypes.STRING,
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
    },
    direccion: {
        type: sequelize_1.DataTypes.JSON,
    },
});
