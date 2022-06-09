import { Request } from "express"
import { Category } from "../entities/Category"
import { categoryRepository } from "../repositories"
import { createCategorySchema, serializedCategoriesSchema } from "../schemas"

class CategoriesService {

    createCategory = async ({ validated }: Request) => {
        const category: Category = await categoryRepository.save({
            ...(validated as Category)
        })
        return await createCategorySchema.validate(category, {
            stripUnknown: true,
        })
    }

    getAll = async () => {
        const categories = await categoryRepository.all()
        
        return await serializedCategoriesSchema.validate(categories, {
            stripUnknown: true,
        })
    }
}

export default new CategoriesService()