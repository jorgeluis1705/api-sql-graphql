export const mutation = {
  Mutation: {
    message(__: void, args: any): any {
      return `This is the messahe ${args["message"]}`;
    },
  },
};
