import { UserSchema } from "./user.schema";

import "graphql-import-node";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolversMap } from "../resolvers/resolvers.map";
import { DireccionSchema } from "./direccion.schema";
import { QueriesSchama } from "./queries.schema";
export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [UserSchema, DireccionSchema, QueriesSchama],
  resolvers: resolversMap,
});
