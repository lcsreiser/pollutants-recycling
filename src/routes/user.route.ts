import { Router } from "express";
import userController from "../controllers/user.controller";
import { obtaintLocationMiddleware } from "../middlewares/obtainLocation.middleware";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import { createUserSchema } from "../schemas";

const userRoute = Router();

userRoute.post(
  "/signup",
  validateSchemaMiddleware(createUserSchema),
  obtaintLocationMiddleware,
  userController.create
);

export { userRoute };
