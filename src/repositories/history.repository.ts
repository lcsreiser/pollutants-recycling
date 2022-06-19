import { Repository } from "typeorm";
import { History } from "../entities";
import AppDataSource from "../data-source";

interface IHistoryRepo {
    save: (history: Partial<History>) => Promise<History>;
}

class HistoryRepository implements IHistoryRepo{
    private repo: Repository<History>;

    constructor() {
        this.repo = AppDataSource.getRepository(History) 
    }

    save = async (history: Partial<History>) => await this.repo.save(history);
}

export default new HistoryRepository();