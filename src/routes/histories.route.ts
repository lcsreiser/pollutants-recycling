import { Router } from "express";
import historiesController from "../controllers/histories.controller";
import HistoryController from "../controllers/histories.controller";
import { validateSchemaMiddleware, validateToken, verifyOwner, validateDumpSpotOrReceiver, validateDate } from "../middlewares";
import {createHistorySchema} from "../schemas";

const route = Router();

route.post("", validateToken,validateSchemaMiddleware(createHistorySchema), verifyOwner, validateDumpSpotOrReceiver, HistoryController.createHistory);
route.get("", validateToken, historiesController.getAll);
route.get("/bydate", validateToken, validateDate, historiesController.getByDate);

export default route