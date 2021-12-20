import { Schema, model } from "mongoose";
export interface IRole {
  role: string;
  _id: string;
}
const schema = new Schema<IRole>({
  role: { type: String, required: [true, "is Requeired role name"] },
});

// 3. Create a Model.
export const RoleModel = model<IRole>("Role", schema);
