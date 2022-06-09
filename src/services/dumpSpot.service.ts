import { Request } from "express";
import { DumpSpot } from "../entities/DumpSpot";
import { dumpSpotRepository } from "../repositories";
import { serializedCreateDumpSpotSchema } from "../schemas";

class DumpSpotService {
    create = async  ({validated} : Request) =>{
        const newDumpSpot = await dumpSpotRepository.save(validated as Partial<DumpSpot>);
        
        return serializedCreateDumpSpotSchema.validate(newDumpSpot, {
            stripUnknown: true
        })
    } 

}

export default new DumpSpotService();