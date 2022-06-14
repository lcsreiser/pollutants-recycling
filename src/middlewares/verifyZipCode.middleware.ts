import "express-async-errors";
import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../errors/appError";
import validateSchemaMiddleware from "./validateSchema.middleware";
import dumpSpotController from "../controllers/dumpSpot.controller";

const verifyZipCodeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const zipCodeRegex = /^([\d]{8})$/; //XX.XXX-XXX | XXXXXXX

  if (req.body.zipCode) {
    //valida com regex
    if (!zipCodeRegex.test(req.body.zipCode)) {
      throw new ErrorHandler(
        400,
        "Incorrect zip code, must be in this format XXXXXXX, max 8 numbers"
      );
    }

    return dumpSpotController.getDumpSpotsById;
  }

  return next();
};

export default verifyZipCodeMiddleware;
