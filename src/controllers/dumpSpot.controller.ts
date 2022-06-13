import { Request, Response } from "express";
import dumpSpotService from "../services/dumpSpot.service";

class DumpSpotController {
    createController = async (req: Request, res: Response) =>{
        const newDumpSpot = await dumpSpotService.create(req);
        
        return res.status(201).json(newDumpSpot);
    } 

    getDumpSpotsById = async (req: Request, res: Response) => {
        const dumpSpot = await dumpSpotService.retrieve(req);

        return res.status(200).json(dumpSpot);
    }

    updateDumpSpot = async (req: Request, res: Response) => {
        const updatedDumpSpot = await dumpSpotService.update(req);
        
        return res.status(200).json(updatedDumpSpot);
    }

    retieveAll = async(req: Request, res:Response) => {
        const dumpSpots = await dumpSpotService.retieveAll()

        return res.status(200).json(dumpSpots)
    }

    delete = async(req: Request, res: Response) => {
        const id = req.params['id']
        await dumpSpotService.delete(id)

        return res.status(200).json({message: "dumpSpot successfully deleted"})
    }
}

export default new DumpSpotController();