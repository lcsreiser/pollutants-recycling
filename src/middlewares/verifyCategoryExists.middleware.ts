import "express-async-errors";
import { NextFunction, Request, Response } from "express";
import { Category } from "../entities/Category";
import { categoryRepository } from "../repositories";
import { ErrorHandler } from "../errors/appError";

const verifyCategoryExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const foundCategory: Category | null = await categoryRepository.findOne({
    name: (req.validated as Category).name,
  });

  if (foundCategory) {
    throw new ErrorHandler(409, `${(req.validated as Category).name} already exists`)
  }

  return next();
};

export default verifyCategoryExists;