import "express-async-errors";
import { NextFunction, Request, Response } from "express";
import { DumpSpot } from "../entities/DumpSpot";
import { dumpSpotRepository } from "../repositories";
import { ErrorHandler } from "../errors/appError";

const verifyDumpSpotExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const foundDumpSpot: DumpSpot | null = await dumpSpotRepository.findOne({
    dumpSpot_id: req.params.dumpSpot_id,
  });

  if (!foundDumpSpot) {
    throw new ErrorHandler(404, `DumpSpot not found!`)
  }

  return next();
};

export default verifyDumpSpotExists;