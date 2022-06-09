import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import {createDumpSpotSchema} from "../schemas"
const route = Router();

route.post("", validateSchemaMiddleware(createDumpSpotSchema));

export default route;