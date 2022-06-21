import { NextFunction, Request, Response } from "express";
import { History, Item } from "../entities";
import { ErrorHandler } from "../errors/appError";
import { itemRepository, historyRepository } from "../repositories";

const verifyOwner = async (req: Request, res: Response, next: NextFunction) => {
    if(req.params.hisotry_id){
        const history: History = await historyRepository.findOne({history_id: req.params.hisotry_id});
        
        if(!req.decoded.histories.includes(history)){
            throw new ErrorHandler(401, "You can`t update someone else`s history")
        }

        return next();

    }
    const item: Item = await itemRepository.findOneBy({itemId: (req.validated as Partial<History>).item})
    
    if(!req.decoded.items.includes(item)){
        throw new ErrorHandler(401, "You can`t trade someone else`s items")
    }
    
    (req.validated as Partial<History>).item = item;

    return next();
}

export default verifyOwner;