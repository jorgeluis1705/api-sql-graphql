import { RoleModel } from "./../schema/role.schema";
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
    // check("role", "Rol must be one o these").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check("role", "Rol must be one o these").custom(async (role: string) => {
      const existRole = await RoleModel.findOne({ role });
      if (!existRole) {
        throw new Error(`${role} not exist`);
      }
    }),
    validateFields,
  ],
  methosPost
);
