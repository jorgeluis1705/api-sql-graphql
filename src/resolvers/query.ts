export const query = {
  Query: {
    helloWorld(): any[] {
      return ["HellosWorld"];
    },
    helloWorldID(__: void, args: any): any {
      return args["id"];
    },
  },
};
