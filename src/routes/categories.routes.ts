import { Router } from "express";
import categoriesController from "../controllers/categories.controller";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import { createCategorySchema, getCategoriesSchema, serializedCategorySchema } from "../schemas";

const routeCategory = Router()

routeCategory.get(
    "",
    validateSchemaMiddleware(getCategoriesSchema),
    categoriesController.getAll
    )

routeCategory.get(
    "/:name",
    validateSchemaMiddleware(serializedCategorySchema),
    categoriesController.getCategory
)

routeCategory.post(
    "",
    validateSchemaMiddleware(createCategorySchema),
    categoriesController.createCategory
)

export default routeCategory