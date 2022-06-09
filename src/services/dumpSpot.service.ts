import { Request } from "express";
import { DumpSpot } from "../entities/DumpSpot";
import { dumpSpotRepository } from "../repositories";

class DumpSpotService {
    create = async  ({validated} : Request) =>{
        // await dumpSpotRepository.save((validated as Partial<DumpSpot>);  
    } 

}

export default new DumpSpotService();