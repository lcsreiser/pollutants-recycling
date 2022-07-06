import { Repository, UpdateResult } from "typeorm";
import { History } from "../entities";
import AppDataSource from "../data-source";

interface IHistoryRepo {
    save: (history: Partial<History>) => Promise<History>;
    update:  (uuid: string, payload: object) => Promise<UpdateResult>;
    findOne: (payload: object) => Promise<History>;
    findBy: (payload: object) => Promise<History[]>;
}

class HistoryRepository implements IHistoryRepo{
    private repo: Repository<History>;

    constructor() {
        this.repo = AppDataSource.getRepository(History) 
    }

    save = async (history: Partial<History>) => await this.repo.save(history);

    update = async (uuid: string, payload: object) =>
    await this.repo.update(uuid, { ...payload });

    findOne = async (payload: object) =>
    await this.repo.findOneBy({ ...payload });

    findBy = async (payload: object) => await this.repo.findBy({...payload});
}

export default new HistoryRepository();