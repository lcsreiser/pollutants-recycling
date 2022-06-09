import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import {createDumpSpotSchema} from "../schemas";

const route = Router();

route.post("", validateSchemaMiddleware(createDumpSpotSchema));
// route.get("/:city");
// route.patch("/:uuid");

export default route;