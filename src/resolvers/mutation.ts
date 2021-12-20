import { RoleModel } from "./../models/role.model";
import { IUser, UserModel } from "../models/user.model";
import bycript from "bcrypt";

export const mutation = {
  Mutation: {
    message(__: void, args: any): any {
      return `This is the messahe ${args["message"]}`;
    },
    createUser: async (__: void, args: any) => {
      try {
        const body: IUser = args;
        const userAux: IUser = { ...body };

        const roleExist = await RoleModel.findOne({ role: body.role });

        if (!roleExist) {
          return null;
        }
        //encriptar contraseña
        const salt = bycript.genSaltSync();
        userAux.password = bycript.hashSync(userAux.password, salt);
        const doc = new UserModel({
          ...userAux,
          google: false,
        });
        await doc.save();
        return await doc;
      } catch (error) {
        null;
      }
    },
    updateUser: async (__: void, args: any) => {
      const { id } = args;

      try {
        let { password, google, email, ...rest }: IUser = args;
        if (password) {
          const salt = bycript.genSaltSync();
          (rest as any).password = bycript.hashSync(password, salt);
        }
        await UserModel.findByIdAndUpdate(id, rest);
        return await UserModel.findById(id);
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    deleteUser: async (__: void, args: any) => {
      try {
        // await UserModel.findByIdAndDelete()
        const { id } = args;
        const user = await UserModel.findByIdAndUpdate(id, { state: false });
        return id;
      } catch (error) {
        return "Error";
      }
    },
  },
};
