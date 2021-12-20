import { ApolloServer } from "apollo-server-express";
import { schema } from "../schema";

export const serverApollo = new ApolloServer({
  schema: schema,
  introspection: true,
});
