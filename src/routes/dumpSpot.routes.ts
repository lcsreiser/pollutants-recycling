import { Router } from "express";
import dumpSpotController from "../controllers/dumpSpot.controller";
import { obtaintLocationMiddleware } from "../middlewares/obtainLocation.middleware";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import validateToken from "../middlewares/validateToken.middleware";
import verifyDumpSpotExists from "../middlewares/verifyDumpSpotExists.middleware";
import {createDumpSpotSchema} from "../schemas";

const route = Router();

route.post("",validateToken, validateSchemaMiddleware(createDumpSpotSchema), obtaintLocationMiddleware, dumpSpotController.createController);
route.get("/:dumpSpot_id", validateToken, verifyDumpSpotExists, dumpSpotController.getDumpSpotsById );
route.patch("/:dumpSpot_id", validateToken, verifyDumpSpotExists, dumpSpotController.updateDumpSpot);
route.get("/?:latitude&:longitude", );

export default route;


