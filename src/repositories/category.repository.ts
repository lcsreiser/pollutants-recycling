import { DeleteResult, Repository, UpdateResult } from "typeorm";
import AppDataSource from "../data-source";
import { Category } from "../entities/Category";

interface ICategoryRepo {
  save: (category: Partial<Category>) => Promise<Category>;
  all: () => Promise<Category[]>;
  findOne: (payload: object) => Promise<Category>;
  update: (uuid: string, payload: object) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class CategoryRepo implements ICategoryRepo {
  private ormRepo: Repository<Category>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Category);
  }

  save = async (category: Partial<Category>) =>
    await this.ormRepo.save(category);
  all = async () => await this.ormRepo.find();

  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };

  update = async (uuid: string, payload: object) =>
    await this.ormRepo.update(uuid, { ...payload });
  delete = async (id: string): Promise<DeleteResult> =>
    await this.ormRepo.delete(id);
}

export default new CategoryRepo();
