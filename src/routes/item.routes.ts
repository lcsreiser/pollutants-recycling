import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import validateToken from "../middlewares/validateToken.middleware";
import { createItemSchema } from "../schemas";

const route = Router();

route.post("", validateToken, validateSchemaMiddleware(createItemSchema));
route.get("", validateToken);
route.patch("/:id", validateToken);
route.delete("/:id", validateToken);

export default route;