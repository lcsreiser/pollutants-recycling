import { Router } from "express";
import HistoryController from "../controllers/histories.controller";
import { validateSchemaMiddleware, validateToken } from "../middlewares";
import validateDumpSpotOrReceiver from "../middlewares/validateDumpSpotOrReceiver.middleware";
import {createHistorySchema} from "../schemas";

const route = Router();

route.post("", validateToken,validateSchemaMiddleware(createHistorySchema),validateDumpSpotOrReceiver, HistoryController.createHistory);


export default route