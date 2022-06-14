import { Router } from "express";
import itemController from "../controllers/item.controller";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import validateToken from "../middlewares/validateToken.middleware";
import { createItemSchema } from "../schemas";

const route = Router();

route.post("", validateToken, validateSchemaMiddleware(createItemSchema), itemController.create);
route.get("/:id", validateToken, itemController.getOneItem);
route.patch("/:id", validateToken, itemController.updatedItem);
route.delete("/:id", validateToken, itemController.delete);

export default route;