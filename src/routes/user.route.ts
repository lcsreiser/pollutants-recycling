import { Router } from "express";
import userController from "../controllers/user.controller";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import { createUserSchema } from "../schemas";

const userRoute = Router();

userRoute.post(
  "/signup",
  validateSchemaMiddleware(createUserSchema),
  userController.create
);

export { userRoute };
