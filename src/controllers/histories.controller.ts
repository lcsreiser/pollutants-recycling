import { Request, Response } from "express";
import HistoryService from "../services/histories.service";

class HistoryController{
    createHistory = async (req: Request, res: Response) =>{
        const newHistory = await HistoryService.create(req);
        
        return res.status(201).json(newHistory);
    }

    getAll = async (req: Request, res: Response) =>{
        const histories= await HistoryService.get(req);

        return res.status(200).json(histories);
    }

    getByDate = async (req: Request, res: Response) =>{}
}

export default new HistoryController();