import { Request } from "express";
import { AssertsShape } from "yup/lib/object";
import { addressRepository, userRepository } from "../repositories";

import { sign } from "jsonwebtoken";
import { Address, User } from "../entities";
import * as dotenv from "dotenv";
import { hash } from "bcrypt";
import { serializedCreateUserSchema } from "../schemas/user/createUser.schema";

dotenv.config();

interface ILogin {
  status: number;
  message: object;
}

class UserService {
  createUser = async ({
    validated,
    decoded,
    location,
  }: Request): Promise<AssertsShape<any>> => {
    (validated as User).password = await hash((validated as User).password, 10);

    const address: Address = await addressRepository.save({
      ...(location as Address),
    });

    const user: User = await userRepository.save(validated as User);

    return await serializedCreateUserSchema.validate(user, {
      stripUnknown: true,
    });
  };

  loginUser = async ({ validated }: Request): Promise<ILogin> => {
    const user: User = await userRepository.findOne({
      email: (validated as User).email,
    });

    if (!user) {
      return {
        status: 401,
        message: { message: "Invalid credentials" },
      };
    }

    if (!(await user.comparePwd((validated as User).password))) {
      return {
        status: 401,
        message: { message: "Invalid credentials" },
      };
    }

    const token: string = sign({ ...user }, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRES_IN,
    });

    return {
      status: 200,
      message: { token },
    };
  };
}

export default new UserService();
