import { Router } from "express";
import HistoryController from "../controllers/histories.controller";
import { validateToken } from "../middlewares";

const route = Router();

route.post("", validateToken, HistoryController.createHistory);


export default route