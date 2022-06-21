import { Request } from "express";
import { ErrorHandler } from "../errors/appError";
import { dumpSpotRepository, userRepository } from "../repositories";
import { History } from "../entities/History";
import historyRepository from "../repositories/history.repository";
import { serializedCreateHistorySchema } from "../schemas/histories/createHistory.schema";

class HistoryService {
    create = async ({ decoded, validated }: Request) => {
        if ((validated as Partial<History>).dumpSpot) {
            const dumpSpot = await dumpSpotRepository.findOne((validated as Partial<History>).dumpSpot)

            if (!dumpSpot) {
                throw new ErrorHandler(404, `DumpSpot ${(validated as Partial<History>).dumpSpot} not found!`)
            }

            return (validated as Partial<History>).dumpSpot = dumpSpot;
        }else if ((validated as Partial<History>).receiver) {
            const receiver = await userRepository.findOne((validated as Partial<History>).receiver)

            if (!receiver) {
                throw new ErrorHandler(404, `Receiver user ${(validated as Partial<History>).receiver} not found!`)
            }

            return (validated as Partial<History>).receiver = receiver;
        } else{
            throw new ErrorHandler(400, "It is necessary a dumpSpot or a receiver user to create a new history!")
        }

        const newHistory = await historyRepository.save({ ...validated, provider: decoded });

        return await serializedCreateHistorySchema.validate(newHistory, {
            stripUnknown: true,
        })
    }
}

export default new HistoryService();
