import { NextFunction, Request, Response } from "express";
import { History, Item, User } from "../entities";
import { ErrorHandler } from "../errors/appError";
import { itemRepository, historyRepository, userRepository } from "../repositories";

const verifyOwner = async (req: Request, res: Response, next: NextFunction) => {
    if(req.params.hisotry_id){
        const user: User = await userRepository.findOne({userId: req.decoded.userId});
        const history: History = user.histories.find((history) => history.history_id === req.params.history_id )

        if(!user.histories.includes(history)){
            throw new ErrorHandler(401, "You can`t update someone else`s history")
        }

        return next();

    }

    const user: User = await userRepository.findOne({userId: req.decoded.userId});
    const item: Item = user.items.find((item) => item.itemId === req.body.item );

    if(!user.items.includes(item)){
        throw new ErrorHandler(401, "You can`t trade someone else`s items")
    }
    
    (req.validated as Partial<History>).item = item;
    return next();
}

export default verifyOwner;