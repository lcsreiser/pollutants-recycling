import { Request, Response } from "express";
import dumpSpotService from "../services/dumpSpot.service";

class DumpSpotController {
  createController = async (req: Request, res: Response) => {
    const newDumpSpot = await dumpSpotService.create(req);

    return res.status(201).json(newDumpSpot);
  };

  getDumpSpots = async (req: Request, res: Response) => {
   
    console.log("entrei no dumpcontroller")
    const dumpSpots = await dumpSpotService.retrieveAll(req);
    console.log("dump result", dumpSpots)
    return res.status(200).json(dumpSpots);
  };

  updateDumpSpot = async (req: Request, res: Response) => {
    const updatedDumpSpot = await dumpSpotService.update(req);

    return res.status(200).json(updatedDumpSpot);
  };
}

export default new DumpSpotController();
