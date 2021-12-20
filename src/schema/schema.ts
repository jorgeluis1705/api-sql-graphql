import { typeDefs as ede } from "./user.schema";

import "graphql-import-node";
import typeDefs from "../schema/schema.graphql";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolversMap } from "../resolvers/resolvers.map";
export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [ede],
  resolvers: resolversMap,
});
