"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const user_schema_1 = require("./user.schema");
require("graphql-import-node");
const schema_1 = require("@graphql-tools/schema");
const resolvers_map_1 = require("../resolvers/resolvers.map");
const direccion_schema_1 = require("./direccion.schema");
const queries_schema_1 = require("./queries.schema");
exports.schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: [user_schema_1.UserSchema, direccion_schema_1.DireccionSchema, queries_schema_1.QueriesSchama],
    resolvers: resolvers_map_1.resolversMap,
});
