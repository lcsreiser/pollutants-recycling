import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { errorHandler } from "./errors/appError";

import registerRouters from "./routes";

const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())
registerRouters(app);

app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
  return errorHandler(err, res);
});

export default app;
