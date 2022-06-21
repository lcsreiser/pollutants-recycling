import { NextFunction, Request, Response } from "express";
import { History } from "../entities/History";
import { ErrorHandler } from "../errors/appError";
import { dumpSpotRepository, userRepository } from "../repositories";

const validateDumpSpotOrReceiver = async (req: Request, res: Response, next: NextFunction) =>{
    const validated: Partial<History> = req.validated as Partial<History>;

    if (validated.dumpSpot) {
        const dumpSpot = await dumpSpotRepository.findOne({dumpSpot_id: validated.dumpSpot})
        if (!dumpSpot) {
            throw new ErrorHandler(404, `DumpSpot ${validated.dumpSpot} not found!`)
        }

        validated.dumpSpot = dumpSpot;
    }else if (validated.receiver) {
        const receiver = await userRepository.findOne({userId: validated.receiver})

        if (!receiver) {
            throw new ErrorHandler(404, `Receiver user ${validated.receiver} not found!`)
        }

        validated.receiver = receiver;
    } else{
        throw new ErrorHandler(400, "It is necessary a dumpSpot or a receiver user to create a new history!")
    }

    return next()
}

export default validateDumpSpotOrReceiver;