import { sequelizeDB } from "./../db/connectionDb";
import { DataTypes } from "sequelize";

export const UserModel = sequelizeDB.define("User", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellidoPaterno: {
    type: DataTypes.STRING,
  },
  apellidoMaterno: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.JSON,
  },
});
export interface IUser {
  id: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  telefono: string;
  direccion: string;
}
