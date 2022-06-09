import { Request, Response } from "express"
import categoriesService from "../services/categories.service"

class CategoriesController {

    createCategory = async (req: Request, res: Response) => {
        const category = await categoriesService.createCategory(req)

        return res.status(201).json(category)
    }

    getAll = async (_: Request, res: Response) => {
        const categories = await categoriesService.getAll()

        return res.status(200).json({message: "Okok" })
    }
}

export default new CategoriesController()