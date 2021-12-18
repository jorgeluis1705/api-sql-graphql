import { IUser, UserModel } from "./../schema/user.schema";
import { response, request } from "express";
export const usersGet = async (req = request, res = response) => {
  try {
    let users: IUser[] = await UserModel.find();
    await res
      .status(200 as any)
      .json(users || [{ name: "juan" }, { name: "luis" }]);
  } catch (error) {}
};
export const userGet = (req = request, res = response) => {
  const params = req.params;
  res.status(500).json({
    params,
  });
};
export const methosPost = async (req = request, res = response) => {
  try {
    const body: IUser = req.body;
    const userAux: IUser = { ...body };
    const doc = new UserModel({
      ...userAux,
    });
    await doc.save();
    await res.status(500).json(doc);
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};
