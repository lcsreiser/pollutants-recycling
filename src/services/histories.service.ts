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
        }

        if ((validated as Partial<History>).userCollector) {
            const userCollector = await userRepository.findOne((validated as Partial<History>).userCollector)

            if (!userCollector) {
                throw new ErrorHandler(404, `User ${(validated as Partial<History>).userCollector} not found!`)
            }

            return (validated as Partial<History>).userCollector = userCollector;
        }

        const newHistory = await historyRepository.save({ ...validated, provider: decoded });

        return await serializedCreateHistorySchema.validate(newHistory, {
            stripUnknown: true,
        })
    }
}

export default new HistoryService();

//caso a transacao ocorra com um outro usuario deve conter 'receiver'
//no body, caso seja um dumpSpot a key sera 'dumpSpot'