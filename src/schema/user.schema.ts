import { gql } from "apollo-server-express";

export const UserSchema = gql`
  type User {
    id: String
    nombre: String
    apellidoPaterno: String
    apellidoMaterno: String
    telefono: String
    direccion: String
  }
`;
