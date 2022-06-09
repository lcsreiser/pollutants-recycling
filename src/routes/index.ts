import { Express } from "express";
import { signup } from "../controllers/signup";
import routeDumpSpot from "./dumpSpot.routes";

const registerRouters = (app: Express): void => {
  // init_app
  app.use("/signup", signup);
  app.use("/dumpSpot", routeDumpSpot);
};

export default registerRouters;
