import { Router } from "express";
import historiesController from "../controllers/histories.controller";
import HistoryController from "../controllers/histories.controller";
import { validateSchemaMiddleware, validateToken, verifyOwner, validateDumpSpotOrReceiver } from "../middlewares";
import {createHistorySchema} from "../schemas";

const route = Router();

route.post("", validateToken,validateSchemaMiddleware(createHistorySchema), verifyOwner, validateDumpSpotOrReceiver, HistoryController.createHistory);
route.patch("/:history_id", validateToken, historiesController.updateHistory);
route.get("", validateToken, historiesController.getAll);

export default route