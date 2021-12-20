import { RoleModel } from "../models/role.model";
import { UserModel } from "../models/user.model";

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
export const existUserByID = async (id: string) => {
  const existUser = await UserModel.findById(id);
  if (!existUser) {
    throw new Error(`${id} Not exist`);
  }
};
