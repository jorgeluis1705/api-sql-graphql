"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverApollo = void 0;
require("graphql-import-node");
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("../schema/schema");
exports.serverApollo = new apollo_server_express_1.ApolloServer({
    introspection: true,
    schema: schema_1.schema,
});
