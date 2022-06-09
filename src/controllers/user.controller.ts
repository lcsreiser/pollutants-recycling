import { Request, Response } from "express";
import userService from "../services/user.service";

class UserController {
  create = async (req: Request, res: Response) => {
    const user = await userService.create(req);

    return res.status(200).json(user);
  };
}

export default new UserController();
