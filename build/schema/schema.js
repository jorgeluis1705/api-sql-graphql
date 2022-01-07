"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const user_schema_1 = require("./user.schema");
require("graphql-import-node");
const schema_graphql_1 = __importDefault(require("../schema/schema.graphql"));
const schema_1 = require("@graphql-tools/schema");
const resolvers_map_1 = require("../resolvers/resolvers.map");
const direccion_schema_1 = require("./direccion.schema");
exports.schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: [schema_graphql_1.default, user_schema_1.UserSchema, direccion_schema_1.DireccionSchema],
    resolvers: resolvers_map_1.resolversMap,
});
