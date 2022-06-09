import { Router } from "express";
import categoriesController from "../controllers/categories.controller";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import { serializedCategorySchema } from "../schemas";

const routeCategory = Router()

routeCategory.get(
    "",
    validateSchemaMiddleware(serializedCategorySchema),
    categoriesController.getAll
    )

routeCategory.post(
    "",
    categoriesController.createCategory
)

export default routeCategory