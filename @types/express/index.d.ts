import { DumpSpot } from "../../src/entities/DumpSpot";
import { Category } from "../../src/entities/Category";
import { Item } from "../../src/entities/Item";
import { User } from "../../src/entities/User";
import {History} from "../../src/entities/History";

declare global {
  namespace Express {
    interface Request {
      validated: User | Item | DumpSpot | Category | History;
      decoded: User;
      location: object;
    }
  }
}
