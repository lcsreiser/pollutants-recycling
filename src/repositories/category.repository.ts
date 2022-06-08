import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities/Category";

interface ICategoryRepo {
  save: (category: Partial<Category>) => Promise<Category>;
  all: () => Promise<Category[]>;
  findOne: (payload: object) => Promise<Category | null>;
}

class CategoryRepo implements ICategoryRepo {
  private ormRepo: Repository<Category>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Category);
  }

  save = async (category: Partial<Category>) => await this.ormRepo.save(category);
  all = async () => await this.ormRepo.find();

  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };
}

export default new CategoryRepo();