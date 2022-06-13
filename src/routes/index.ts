import { Express } from "express";
import routeDumpSpot from "./dumpSpot.routes";
import itemsRoutes from "./item.routes";

import { userRoute } from "./user.route";

const registerRouters = (app: Express): void => {
  app.use("/user", userRoute);
  app.use("/dumpSpot", routeDumpSpot);
  app.use("/items", itemsRoutes);
};
export default registerRouters;
