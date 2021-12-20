import { resolversMap } from "./../resolvers/resolvers.map";
import "graphql-import-node";
import typeDefs from "../schema/schema.graphql";
import { ApolloServer } from "apollo-server-express";

export const serverApollo = new ApolloServer({
  typeDefs,
  resolvers: resolversMap,
  introspection: true,
});
