import { query } from "./query";
import { type } from "./type";
import { mutation } from "./mutation";

export const resolversMap = {
  ...query,
  ...type,
  ...mutation,
};
