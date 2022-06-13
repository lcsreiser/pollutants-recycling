import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";
import { ErrorHandler } from "../errors/appError";

const validateSchemaMiddleware =
  (shape: AnySchema) =>
  async (req: Request, _: Response, next: NextFunction) => {
    try {
      const validated = await shape.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.validated = validated;

      return next();
    } catch (error) {
      throw new ErrorHandler(400, { error: error.errors });
    }
  };

export default validateSchemaMiddleware;
