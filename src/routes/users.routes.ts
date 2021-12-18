import { usersGet, methosPost, userGet } from "./../controlers/users.controler";
import { Router } from "express";
import { check } from "express-validator";

export const router = Router();

router.get("/", usersGet);
router.get("/:id", userGet);
router.post(
  "/",
  [check("email", "must be an email validate").isEmail()],
  methosPost
);
