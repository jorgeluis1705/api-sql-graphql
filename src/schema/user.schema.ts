import { gql } from "apollo-server-express";

export const UserSchema = gql`
  type User {
    name: String
    email: String
    avatar: String
    password: String
    role: String
    state: Boolean
    google: Boolean
    _id: String
  }
`;
