import { Request, Response } from "express";
import HistoryService from "../services/histories.service";

class HistoryController{
    createHistory = async (req: Request, res: Response) =>{
        const newHistory = await HistoryService.create(req);

        return res.status(201).json(newHistory);
    }

    updateHistory = async (req: Request, res: Response) =>{
        const updatedHistory = await HistoryService.update(req);
        
        return res.status(200).json(updatedHistory);
    }

    getAll = async (req: Request, res: Response) =>{
        const histories: History[] = await HistoryService.get(req);

        return res.status(200).json(histories);
    }
}

export default new HistoryController();