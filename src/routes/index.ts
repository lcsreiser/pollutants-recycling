import { Express } from "express";
import { signup } from "../controllers";
import routeCategory from "./categories.routes";
import routeDumpSpot from "./dumpSpot.routes";
import itemsRoutes from "./item.routes";
const registerRouters = (app: Express): void => {
  // init_app
  app.use("/signup", signup);
  app.use("/dumpSpot", routeDumpSpot);
  app.use("/categories", routeCategory)
  app.use("/items", itemsRoutes)
};

export default registerRouters;
