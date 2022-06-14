import { Express } from "express";
<<<<<<< HEAD
import routeDumpSpot from "./dumpSpot.routes";
import itemsRoutes from "./item.routes";

import { userRoute } from "./user.route";

const registerRouters = (app: Express): void => {
  app.use("/user", userRoute);
  app.use("/dumpSpot", routeDumpSpot);
=======
import routeCategory from "./categories.routes";
import routeDumpSpot from "./dumpSpot.routes";
import itemsRoutes from "./item.routes";
import userRoutes from "./user.routes";

const registerRouters = (app: Express): void => {
  // init_app
  app.use("/users", userRoutes);
  app.use("/dumpSpot", routeDumpSpot);
  app.use("/categories", routeCategory);
>>>>>>> develop
  app.use("/items", itemsRoutes);
};
export default registerRouters;
