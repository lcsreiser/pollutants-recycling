import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify, VerifyErrors } from "jsonwebtoken";
import { User } from "../entities/User";
import { ErrorHandler } from "../errors/appError";
import * as dotenv from 'dotenv';

dotenv.config()

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = (req.headers.authorization?.split(" ")[1]) as string;

  if (!token) {
    res.status(400).json({ message: "Missing authorization token." });
  }

  return verify(
    token,
    process.env.SECRET_KEY,
    (err: VerifyErrors, decoded: string | JwtPayload) => {
      if (err) {
        throw new ErrorHandler(401, err.message)        
      }

      req.decoded = decoded as User; 

      return next();
    }
  );
};

export default validateToken;
