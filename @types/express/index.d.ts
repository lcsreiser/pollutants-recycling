import { User } from "../../src/entities/User";

declare global {
    namespace Express {
      interface Request {
        validated: User
        decoded: User
      }
    }
  }