"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DireccionSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.DireccionSchema = (0, apollo_server_express_1.gql) `
  type Direccion {
    calle: String
    numero: String
    estado: String
    ciudad: String
  }
  input DireccionInput {
    calle: String
    numero: String
    estado: String
    ciudad: String
  }
`;
