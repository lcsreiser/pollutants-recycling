import { hash } from "bcrypt";
import { Request } from "express";
import { AssertsShape } from "yup/lib/object";
import { User } from "../entities/User";
import { userRepository } from "../repositories";

class UserService {
  create = async ({ validated }: Request): Promise<AssertsShape<any>> => {
    (validated as User).password = await hash((validated as User).password, 10);

    const user: User = await userRepository.save(validated as User);

    return user;
  };
}

export default new UserService();
