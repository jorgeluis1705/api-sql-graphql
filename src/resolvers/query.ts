import { IUser } from "./../models/user.model";
const usersInMongo = async (): Promise<IUser[]> => {
  const users: IUser[] = []; // await UserModel.find();
  return users;
};
export const query = {
  Query: {
    async getUsers(): Promise<IUser[]> {
      return await usersInMongo();
    },
    getUser: async (root: any, args: any) => {
      // return (await UserModel.findById(args["id"])) as IUser;
      return {
        name: "s",
      };
    },
  },
};
