import { Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { DumpSpot } from "../entities/DumpSpot";

interface IDumpSpotRepo {
    save: (dumpSpot: Partial<DumpSpot>) => Promise<DumpSpot>;
    findBy: (payload: object) => Promise<DumpSpot[]>;
    update: (uuid: string, payload: object) => Promise<UpdateResult>;
}

class DumpSpotRepository implements IDumpSpotRepo {
    private repo: Repository<DumpSpot>;

    constructor() {
        this.repo = AppDataSource.getRepository(DumpSpot)
    }

    save = async (dumpSpot: Partial<DumpSpot>) => await this.repo.save(dumpSpot);

    findBy = async (payload: object) => await this.repo.findBy({...payload});

    update = async (uuid: string, payload: object) => await this.repo.update(uuid, {...payload});
}

export default new DumpSpotRepository();