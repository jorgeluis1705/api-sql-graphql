import { RoleModel } from "../schema/role.schema";
import { UserModel } from "../schema/user.schema";

export const roleCheck = async (role: string) => {
  const existRole = await RoleModel.findOne({ role });
  if (!existRole) {
    throw new Error(`${role} not exist`);
  }
};
export const emailCheck = async (email: string) => {
  const existEmail = await UserModel.findOne({ email: email });
  if (existEmail) {
    throw new Error(`${email} already exist`);
  }
};
