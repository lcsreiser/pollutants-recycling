import "express-async-errors";
import { NextFunction, Request, Response } from "express";
import { Category } from "../entities/Category";
import { categoryRepository } from "../repositories";
import { ErrorHandler } from "../errors/appError";
import { Item } from "../entities";

const verifyCategoryIsAcceptedMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //se no body da requisição não houver uma categoria, apenas avança
  if (!req.body.category) {
    return next();
  }

  if (req.validated) {
    const category: Category | null = await categoryRepository.findOne({
      name: (req.validated as Item).category,
    });

    if (!category) {
      throw new ErrorHandler(409, `${req.body.category} doesn't exists in DB`);
    }

    return next();
  }

  const category: Category | null = await categoryRepository.findOne({
    name: req.body.category,
  });

  if (!category) {
    throw new ErrorHandler(409, `${req.body.category} doesn't exists`);
  }

  return next();
};

export default verifyCategoryIsAcceptedMiddleware;
