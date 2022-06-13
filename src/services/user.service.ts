import { hash } from "bcrypt";
import { Request } from "express";
import { AssertsShape } from "yup/lib/object";
import { Address } from "../entities/Address";
import { User } from "../entities/User";
import { addressRepository, userRepository } from "../repositories";
import { obtainLatitudeLongitude } from "../utils/obtainLatitudeLongitude";
import { searchZipCode } from "../utils/searchZipCode";

class UserService {
  // Promise<AssertsShape<any>>
  create = async ({ validated, location }: Request) => {
    (validated as User).password = await hash((validated as User).password, 10);

    const address: Address = await addressRepository.save({
      ...(location as Address),
    });

    const user: User = await userRepository.save(validated as User);

    return "ok";
  };
}

export default new UserService();
