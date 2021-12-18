import { response, request } from "express";
export const usersGet = (req = request, res = response) => {
  res.status(500 as any).json([{ name: "juan" }, { name: "luis" }]);
};
export const userGet = (req = request, res = response) => {
  const params = req.params;
  res.status(500).json({
    params,
  });
};
export const methosPost = (req = request, res = response) => {
  const body = req.body;
  res.status(500).json({
    body,
  });
};
