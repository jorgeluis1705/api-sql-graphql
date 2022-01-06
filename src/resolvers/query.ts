import { IUser, UserModel } from "./../models/user.model";
const usersInMongo = async (): Promise<IUser[]> => {
  const users: IUser[] = (await UserModel.findAll()) as any;
  return users;
};
export const query = {
  Query: {
    async getUsers(): Promise<IUser[]> {
      return await usersInMongo();
    },
    getUser: async (root: any, args: any) => {
      const user = await UserModel.findByPk(args["id"]);
      return user;
    },
  },
};
