import { Request, Response } from "express";
import itemService from "../services/item.service";

class ItemController{
    create = async (req: Request, res: Response) => {
        const item = await itemService.create(req)

        return res.status(201).json(item)
    };
    getOneItem = async(req: Request, res:Response) => {
        const id = req.params['id']
        const item = await itemService.getOneItem(id)

        return res.status(200).json(item)
    }
    updatedItem = async(req: Request, res: Response)=>{
        const id = req.params['id']
        const infoToUpdated = req.body
        const item = await itemService.updateItem(id, infoToUpdated)

        return res.status(204).json(item)
    }
    delete = async(req: Request, res: Response)=>{
        const id = req.params['id']
        await itemService.deleteItem(id)

        return res.status(200).json({message: "Item successfully deleted"})
    }
}

export default new ItemController();