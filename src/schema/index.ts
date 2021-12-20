import { resolversMap } from "./../resolvers/resolvers.map";
import { GraphQLSchema } from "graphql";
import "graphql-import-node";
import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./schema.graphql";

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers: resolversMap,
});
