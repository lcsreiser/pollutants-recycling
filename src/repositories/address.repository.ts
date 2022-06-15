import { Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Address } from "../entities/Address";

interface IAdressRepo{
    save: (address: Address) => Promise<Address>;
    findBy: (payload: object) => Promise<Address[]>;
    update:(uuid: string, payload: object) => Promise<UpdateResult>
    retrieve: (payload: string) => Promise<Address[]>
}

class AddressRepository implements IAdressRepo{
    private repo: Repository<Address>;

    constructor() {
        this.repo = AppDataSource.getRepository(Address)
    }

    save = async (address: Address) => await this.repo.save(address);

    findBy = async (payload: object) => await this.repo.findBy({...payload});
    
    update = async (uuid: string, payload: object) => await this.repo.update(uuid, {...payload});

    retrieve = async (payload: string) => await this.repo.find({where: {isDumpSpot: true, city: payload}})
}

export default new AddressRepository();