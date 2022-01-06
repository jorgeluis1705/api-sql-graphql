import { gql } from "apollo-server-express";

export const DireccionSchema = gql`
  type Direccion {
    calle: String
    numero: String
    estado: String
    ciudad: String
  }
  input DireccionInput {
    calle: String
    numero: String
    estado: String
    ciudad: String
  }
`;
