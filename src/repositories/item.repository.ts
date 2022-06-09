import { ObjectType, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Item } from "../entities/Item";

interface IItemRepo {
    save: (item: Item) => Promise<(Item)>;
    update: (uuid: string, payload: object) => Promise<UpdateResult>;
    findBy: (payload: object) => Promise<Item[]>;
    findOneBy: (payload: object) => Promise<Item | null>;
}

class ItemRepository implements IItemRepo {
    private repo: Repository<Item>;
    
    constructor() {
        this.repo = AppDataSource.getRepository(Item)
    }

    save = async (item: Item) => await this.repo.save(item);

    update = async (uuid: string, payload: object) => await this.repo.update(uuid, {...payload});

    findBy = async (payload: object) => await this.repo.findBy({...payload});

    findOneBy = async (payload: object) => await this.repo.findOneBy({...payload});
}

export default new ItemRepository();