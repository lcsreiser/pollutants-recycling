import { Request, Response } from "express";
import HistoryService from "../services/histories.service";

class HistoryController{
    createHistory = (req: Request, res: Response) =>{
        const newHistory = HistoryService.create(req)

        return res.status(201).json(newHistory)
    }
}

export default new HistoryController();