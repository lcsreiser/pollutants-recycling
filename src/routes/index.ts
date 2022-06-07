import { Express } from "express";
import { signup } from "../controllers/signup";

const registerRouters = (app: Express): void => {
  // init_app
  app.use("/signup", signup);
};

export default registerRouters;
