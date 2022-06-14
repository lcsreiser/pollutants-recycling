import { Request } from "express";
import { Category } from "../entities";
import { categoryRepository } from "../repositories";
import {
  createCategorySchema,
  getCategoriesSchema,
  serializedCategorySchema,
} from "../schemas";

class CategoriesService {
  createCategory = async ({ validated }: Request) => {
    const category: Category = await categoryRepository.save({
      ...(validated as Category),
    });
    return await createCategorySchema.validate(category, {
      stripUnknown: true,
    });
  };

  getCategory = async ({ params }: Request) => {
    const category: Category | null = await categoryRepository.findOne({
      name: params.name,
    });

    // return category

    return await serializedCategorySchema.validate(category, {
      stripUnknown: true,
    });
  };

  getAll = async () => {
    const categories = await categoryRepository.all();

    return await getCategoriesSchema.validate(categories, {
      stripUnknown: true,
    });
  };
}

export default new CategoriesService();
