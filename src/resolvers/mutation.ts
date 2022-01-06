import { UserModel } from "./../models/user.model";
import { IUser } from "../models/user.model";
import { v4 as uuidv4 } from "uuid";

export const mutation = {
  Mutation: {
    createUser: async (__: void, args: any) => {
      try {
        const body: IUser = args;
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
        const userUopdated = await UserModel.findByPk(id);
        await userUopdated?.update(args);
        return args;
      } catch (error) {
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
