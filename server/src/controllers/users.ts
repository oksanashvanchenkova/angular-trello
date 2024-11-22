import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user";

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = new UserModel({
      email: req.body.email,
      userName: req.body.userName,
      password: req.body.password,
    });
    console.log("newUser", newUser);
    const saveUser = await newUser.save();
    console.log("saveUser", saveUser);
  } catch (err) {
    next(err);
  }
};
