import { Request, Response } from "express";
import { userService } from "../services";

class UserController {
  createUser = async (req: Request, res: Response) => {
    const user = await userService.createUser(req);

    return res.status(201).json(user);
  };

  loginUser = async (req: Request, res: Response) => {
    const { status, message } = await userService.loginUser(req);
    return res.status(status).json(message);
  };
}

export default new UserController();
