"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.UserSchema = (0, apollo_server_express_1.gql) `
  type User {
    id: String
    nombre: String
    apellidoPaterno: String
    apellidoMaterno: String
    telefono: String
    direccion: Direccion
  }
`;
