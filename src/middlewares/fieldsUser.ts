import { request, response } from "express";
import { validationResult } from "express-validator";

export const validateFields = (req = request, res = response, next: any) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(404).json(errors);
  }
  next();
};
