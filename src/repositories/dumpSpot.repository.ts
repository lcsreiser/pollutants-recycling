import { Repository, UpdateResult, DeleteResult } from "typeorm";
import AppDataSource from "../data-source";
import { DumpSpot } from "../entities/DumpSpot";

interface IDumpSpotRepo {
  save: (dumpSpot: Partial<DumpSpot>) => Promise<DumpSpot>;
  findOne: (payload: object) => Promise<DumpSpot>;
  all: (payload: object) => Promise<DumpSpot[]>;
  update: (uuid: string, payload: object) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
  teste: (
    catId: string,
    dumpId: string,
    addressId: string
  ) => Promise<DumpSpot>;
}

class DumpSpotRepository implements IDumpSpotRepo {
  private repo: Repository<DumpSpot>;

  constructor() {
    this.repo = AppDataSource.getRepository(DumpSpot);
  }

  save = async (dumpSpot: Partial<DumpSpot>) => await this.repo.save(dumpSpot);

  findOne = async (payload: object) =>
    await this.repo.findOneBy({ ...payload });

  all = async () => await this.repo.find();

  update = async (uuid: string, payload: object) =>
    await this.repo.update(uuid, { ...payload });

  delete = async (id: string): Promise<DeleteResult> =>
    await this.repo.delete(id);

  teste = async (catId: string, dumpId: string, addressId: string) =>
    this.repo
      .createQueryBuilder("dumpSpots")
      .leftJoinAndSelect("dumpSpots.categories", "category")
      .leftJoinAndSelect("dumpSpots.address", "address")
      .where("category.categoryId = :catId", { catId: catId })
      .andWhere("dumpSpots.dumpSpot_id = :dumpId", { dumpId: dumpId })
      .andWhere("dumpSpots.addressAddressId = :addressId", {
        addressId: addressId,
      })
      .getOne();
}

export default new DumpSpotRepository();
