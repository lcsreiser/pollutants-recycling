import { Router } from "express";
import categoriesController from "../controllers/categories.controller";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import { createCategorySchema, serializedCategoriesSchema } from "../schemas";

const routeCategory = Router()

routeCategory.get(
    "",
    validateSchemaMiddleware(serializedCategoriesSchema),
    categoriesController.getAll
    )

routeCategory.post(
    "",
    validateSchemaMiddleware(createCategorySchema),
    categoriesController.createCategory
)

export default routeCategory