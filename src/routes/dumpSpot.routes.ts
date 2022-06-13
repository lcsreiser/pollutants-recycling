import { Router } from "express";
import dumpSpotController from "../controllers/dumpSpot.controller";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import validateToken from "../middlewares/validateToken.middleware";
import verifyDumpSpotExists from "../middlewares/verifyDumpSpotExists.middleware";
import {createDumpSpotSchema} from "../schemas";

const route = Router();

route.post("",validateToken, validateSchemaMiddleware(createDumpSpotSchema), dumpSpotController.createController);
route.get("/:dumpSpot_id", validateToken, verifyDumpSpotExists, dumpSpotController.getDumpSpotsById );
route.patch("/:dumpSpot_id", validateToken, verifyDumpSpotExists, dumpSpotController.updateDumpSpot);
route.get("", validateToken, dumpSpotController.retieveAll);
route.delete("/:dumpSpot_id", validateToken, verifyDumpSpotExists, dumpSpotController.delete);

export default route;

//to do
//middleware de verificacao de usuario para atualizar locais de coleta
