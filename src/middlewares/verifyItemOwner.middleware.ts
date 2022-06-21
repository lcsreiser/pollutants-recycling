import { NextFunction, Request, Response } from "express";
import { History, Item } from "../entities";
import { ErrorHandler } from "../errors/appError";
import { itemRepository } from "../repositories";

const verifyItemOwner = async (req: Request, res: Response, next: NextFunction) => {
    const item: Item = await itemRepository.findOneBy({itemId: (req.validated as Partial<History>).item})
    
    if(!req.decoded.items.includes(item)){
        throw new ErrorHandler(401, "You can`t trade someone else`s items")
    }
    
    (req.validated as Partial<History>).item = item;

    return next();
}

export default verifyItemOwner;