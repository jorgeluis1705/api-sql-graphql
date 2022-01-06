import { UserModel } from "./../models/user.model";
import { IUser } from "../models/user.model";
import bycript from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export const mutation = {
  Mutation: {
    createUser: async (__: void, args: any) => {
      try {
        const body: IUser = args;
        const userAux: IUser = { ...body };

        return await UserModel.create({
          ...body,
          id: uuidv4(),
        });
      } catch (error) {
        return null;
      }
    },
    updateUser: async (__: void, args: any) => {
      const { id } = args;

      try {
        // let { password, email, ...rest }: IUser = args;
        // if (password) {
        //   const salt = bycript.genSaltSync();
        //   (rest as any).password = bycript.hashSync(password, salt);
        // }
        return await {
          id: "s",
        };
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    deleteUser: async (__: void, args: any) => {
      try {
        // await UserModel.findByIdAndDelete()
        const { id } = args;
        const userDelete = await UserModel.findByPk(id);
        userDelete?.destroy();
        return id;
      } catch (error) {
        return "Error";
      }
    },
  },
};
