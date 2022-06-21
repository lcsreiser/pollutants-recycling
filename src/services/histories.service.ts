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

    get = async ({ decoded }: Request) => {
        const user: User = await userRepository.findOne({ userId: decoded.userId });

        return user.histories;
    }

    getByDate = async ({ decoded, params }: Request) => {
        const user: User = await userRepository.findOne({ userId: decoded.userId });

        const historiesByDate = user.histories.map(history => )
    }
}

export default new HistoryService();
