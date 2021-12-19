import { RoleModel } from "../schema/role.schema";

export const roleCheck = async (role: string) => {
  const existRole = await RoleModel.findOne({ role });
  if (!existRole) {
    throw new Error(`${role} not exist`);
  }
};
