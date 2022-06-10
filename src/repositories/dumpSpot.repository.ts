import { Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { DumpSpot } from "../entities/DumpSpot";

interface IDumpSpotRepo {
    save: (dumpSpot: Partial<DumpSpot>) => Promise<DumpSpot>;
    findOne: (payload: object) => Promise<DumpSpot | null>;
    update: (uuid: string, payload: object) => Promise<UpdateResult>;
}

class DumpSpotRepository implements IDumpSpotRepo {
    private repo: Repository<DumpSpot>;

    constructor() {
        this.repo = AppDataSource.getRepository(DumpSpot)
    }

    save = async (dumpSpot: Partial<DumpSpot>) => await this.repo.save(dumpSpot);

    findOne = async (payload: object) => await this.repo.findOneBy({...payload});

    update = async (uuid: string, payload: object) => await this.repo.update(uuid, {...payload});
}

export default new DumpSpotRepository();