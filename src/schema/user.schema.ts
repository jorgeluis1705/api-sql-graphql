import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    helloWorld: [String]
    helloWorldID(id: ID): String
  }
  type Mutation {
    message(message: String!): String
  }
`;
