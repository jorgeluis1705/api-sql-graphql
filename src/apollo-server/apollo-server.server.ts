import "graphql-import-node";
import { ApolloServer } from "apollo-server-express";
import { schema } from "../schema/schema";

export const serverApollo = new ApolloServer({
  introspection: true,
  schema: schema,
});
