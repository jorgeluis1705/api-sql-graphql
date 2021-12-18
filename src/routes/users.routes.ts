import { validateFields } from "./../middlewares/fieldsUser";
import { usersGet, methosPost, userGet } from "./../controlers/users.controler";
import { Router } from "express";
import { check } from "express-validator";

export const router = Router();

router.get("/", usersGet);
router.get("/:id", userGet);
router.post(
  "/",
  [
    check("email", "must be an email validate").isEmail(),
    check("name", "name is required").not().isEmpty(),
    check("password", "Password is required").isLength({ min: 6 }),
    check("role", "Rol must be one o these").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    validateFields,
  ],
  methosPost
);
