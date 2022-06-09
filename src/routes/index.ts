import { Express } from "express";
import { signup } from "../controllers/signup";
import { userRoute } from "./user.route";

const registerRouters = (app: Express): void => {
  // init_app
  app.use("/signup", signup);
  app.use("/user", userRoute);
};

export default registerRouters;
