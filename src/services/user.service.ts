import { hash } from "bcrypt";
import { Request } from "express";
import { AssertsShape } from "yup/lib/object";
import { User } from "../entities/User";
import { userRepository } from "../repositories";
import { obtainLatitudeLongitude } from "../utils/obtainLatitudeLongitude";
import { searchZipCode } from "../utils/searchZipCode";

class UserService {
  // Promise<AssertsShape<any>>
  create = async ({ validated }: Request) => {
    (validated as User).password = await hash((validated as User).password, 10);

    const {
      address: { zipCode },
    } = validated;

    let { address, city } = await searchZipCode(Number(zipCode));

    let { latitude, longitude } = await obtainLatitudeLongitude({
      address,
      city,
      number: validated.address.number,
    });
    console.log(latitude, longitude);

    // const user: User = await userRepository.save(validated as User);

    return "ok";
  };
}

export default new UserService();
