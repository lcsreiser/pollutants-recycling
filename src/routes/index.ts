import { Express } from "express";
import routeCategory from "./categories.routes";
import routeDumpSpot from "./dumpSpot.routes";
import itemsRoutes from "./item.routes";
import userRoutes from "./user.routes";

const registerRouters = (app: Express): void => {
  // init_app
  app.use("/users", userRoutes);
  app.use("/dumpSpot", routeDumpSpot);
  app.use("/categories", routeCategory);
  app.use("/items", itemsRoutes);
};

export default registerRouters;
