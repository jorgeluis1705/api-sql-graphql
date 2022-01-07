import { gql } from "apollo-server-express";

export const QueriesSchama = gql`
  type Query {
    getUsers: [User]
    getUser(id: String): User
  }
  type Mutation {
    createUser(
      nombre: String
      apellidoPaterno: String
      apellidoMaterno: String
      telefono: String
      direccion: DireccionInput
    ): User
    updateUser(
      id: String
      nombre: String
      apellidoPaterno: String
      apellidoMaterno: String
      telefono: String
      direccion: DireccionInput
    ): User
    deleteUser(id: String): String
  }
`;
