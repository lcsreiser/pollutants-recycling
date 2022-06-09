import { Request, Response } from "express";
import dumpSpotService from "../services/dumpSpot.service";

class DumpSpotController {
    createController = async (req: Request, res: Response) =>{
        const newDumpSpot = await dumpSpotService.create(req);
        
        return res.status(201).json(newDumpSpot);
    } 
}

export default new DumpSpotController();