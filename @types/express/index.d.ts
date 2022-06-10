import { DumpSpot } from "../../src/entities/DumpSpot";
import { Category } from "../../src/entities/Category";
import { Item } from "../../src/entities/Item";
import { User } from "../../src/entities/User";

declare global {
    namespace Express {
      interface Request {
        validated: User | Item | DumpSpot | Category
        decoded: User
      }
    }
  }
