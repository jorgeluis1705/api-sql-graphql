import { Schema, model } from "mongoose";
export interface IUser {
  name: string;
  email: string;
  avatar?: string;
  password: string;
  role: string;
  state: boolean;
  google: boolean;
  _id: string;
}
const schema = new Schema<IUser>({
  name: { type: String, required: [true, "is Requeired name"] },
  email: { type: String, required: [true, "is Requeired email"], unique: true },
  password: { type: String, required: [true, "is Requeired passowr"] },
  avatar: String,
  role: {
    required: true,
    type: String,
    enum: ["ADMIN_ROLE", "USER_ROLE"],
  },
  state: { type: Boolean, default: true },
  google: { type: Boolean, default: false },
});

// 3. Create a Model.
export const UserModel = model<IUser>("User", schema);
