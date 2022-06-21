import { Request } from "express";
import { User } from "../entities";
import { ErrorHandler } from "../errors/appError";
import { dumpSpotRepository, userRepository } from "../repositories";
import historyRepository from "../repositories/history.repository";
import { serializedCreateHistorySchema } from "../schemas/histories/createHistory.schema";

class HistoryService {
    create = async ({ decoded, validated }: Request) => {
        const newHistory = await historyRepository.save({ ...validated, provider: decoded });

        return await serializedCreateHistorySchema.validate(newHistory, {
            stripUnknown: true,
        })
    }

    update = async ({ params, body }: Request) => {
        await historyRepository.update(params.history_id, {...body})
        
        const updatedHistory = await historyRepository.findOne({hisotry_id: params.hisotry_id});

        return await serializedCreateHistorySchema.validate( updatedHistory, {
            stripUnknown: true,
        })
    }

    get = async ({ decoded }: Request) => {
        const user: User = await userRepository.findOne({userId: decoded.userId});

        return user.histories;
    }
}

export default new HistoryService();
