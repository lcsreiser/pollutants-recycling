import { Category } from "../../src/entities/Category";
import { User } from "../../src/entities/User";

declare global {
    namespace Express {
      interface Request {
        validated: User | Category
        decoded: User
      }
    }
  }
