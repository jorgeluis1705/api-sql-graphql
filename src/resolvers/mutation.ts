import { IUser } from "../models/user.model";
import bycript from "bcrypt";
export const mutation = {
  Mutation: {
    createUser: async (__: void, args: any) => {
      try {
        const body: IUser = args;
        const userAux: IUser = { ...body };

        //encriptar contraseña
        const salt = bycript.genSaltSync();
        // userAux.password = bycript.hashSync(userAux.password, salt);

        // await doc.save();
        // return await doc;
        return {
          name: "S",
        };
      } catch (error) {
        null;
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
        return id;
      } catch (error) {
        return "Error";
      }
    },
  },
};
