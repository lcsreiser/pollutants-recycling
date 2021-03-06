import { Request, Response } from "express"
import categoriesService from "../services/categories.service"

class CategoriesController {

    createCategory = async (req: Request, res: Response) => {
        const category = await categoriesService.createCategory(req)

        return res.status(201).json(category)
    }

    getCategory = async (req: Request, res: Response) => {
        const chosenCategory = await categoriesService.getCategory(req)

        chosenCategory === null ?
        res.status(404).json({"error": "Category not found"}) : 
        res.status(201).json( chosenCategory )
    }

    getAll = async (_: Request, res: Response) => {
        const categories = await categoriesService.getAll()

        return res.status(200).json({ categories })
    }

    updateCategory = async (req: Request, res: Response) => {
        const categoryToUpdate = await categoriesService.updateCategory(req)

        categoryToUpdate === null ? 
        res.status(404).json({"error": "Category not found"}) :
        res.status(200).json(categoryToUpdate)
    }

    deleteCategory = async (req: Request, res: Response) => {
        const categoryToDelete = await categoriesService.deleteCategory(req)

        categoryToDelete === null ?
        res.status(404).json({"error": "Category not found"}) :
        res.status(202).json("Succefully deleted")
    }
}

export default new CategoriesController()