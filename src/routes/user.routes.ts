import { Router } from "express";
import userController from "../controllers/user.controller";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import verifyUserExists from "../middlewares/verifyUserExists.middleware";
import { createUserSchema, loginUserSchema } from "../schemas/user";

const route = Router();

route.post(
  "/signup",
  validateSchemaMiddleware(createUserSchema),
  verifyUserExists,
  userController.createUser
);

route.post(
  "/signin",
  validateSchemaMiddleware(loginUserSchema),
  userController.loginUser
);

export default route;
