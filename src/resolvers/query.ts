import { IUser, UserModel } from "./../models/user.model";
const usersInMongo = async (): Promise<IUser[]> => {
  const users: IUser[] = await UserModel.find();
  return users;
};
export const query = {
  Query: {
    helloWorld(): any[] {
      return ["HellosWorld"];
    },
    helloWorldID(__: void, args: any): any {
      return args["id"];
    },
    async getUsers(): Promise<IUser[]> {
      return await usersInMongo();
    },
    getUser: async (root: any, args: any) => {
      return (await UserModel.findById(args["id"])) as IUser;
    },
  },
};
