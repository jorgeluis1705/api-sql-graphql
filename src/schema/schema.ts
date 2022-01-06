import { UserSchema } from "./user.schema";

import "graphql-import-node";
import typeDefs from "../schema/schema.graphql";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolversMap } from "../resolvers/resolvers.map";
import { DireccionSchema } from "./direccion.schema";
export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [typeDefs, UserSchema, DireccionSchema],
  resolvers: resolversMap,
});
