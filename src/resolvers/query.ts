import { IUser, UserModel } from "./../models/user.model";
export const query = {
  Query: {
    helloWorld(): any[] {
      return ["HellosWorld"];
    },
    helloWorldID(__: void, args: any): any {
      return args["id"];
    },
    async getUsers(): Promise<IUser[]> {
      const users: IUser[] = await UserModel.find();
      return users;
    },
  },
};
