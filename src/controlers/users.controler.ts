import { IUser, UserModel } from "./../schema/user.schema";
import bycript from "bcrypt";
import { response, request, Request, Response } from "express";
export const usersGet = async (req = request, res = response) => {
  try {
    let users: IUser[] = await UserModel.find();
    await res.status(500 as any).json(users || []);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
export const userGet = async (req = request, res = response) => {
  const params = req.params;

  try {
    const user = await UserModel.findById(params.id);
    await res.status(200 as any).json(user);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
export const methosPost = async (req = request, res = response) => {
  // email validation for correct format
  try {
    const body: IUser = req.body;
    const userAux: IUser = { ...body };

    //encriptar contraseña
    const salt = bycript.genSaltSync();
    userAux.password = bycript.hashSync(userAux.password, salt);
    const doc = new UserModel({
      ...userAux,
      google: false,
    });
    await doc.save();
    await res.status(500).json(doc);
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};

export const userUpdateOne = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    let { password, google, ...rest }: IUser = req.body;
    if (password) {
      const salt = bycript.genSaltSync();
      (rest as any).password = bycript.hashSync(password, salt);
    }
    await UserModel.findByIdAndUpdate(id, rest);
    await res.status(200).json(rest);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error,
    });
  }
};
