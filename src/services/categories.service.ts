import { Request } from "express"
import { Category } from "../entities/Category"
import { categoryRepository } from "../repositories"
import { serializedCategorySchema } from "../schemas"

class CategoriesService {

    createCategory = async ({ validated }: Request) => {
        const category: Category = await categoryRepository.save({
            ...(validated as Category)
        })
        return await serializedCategorySchema.validate(category, {
            stripUnknown: true,
        })
    }

    getAll = async () => {
        const categories = await categoryRepository.all()

        return  categories
    }
}

export default new CategoriesService()