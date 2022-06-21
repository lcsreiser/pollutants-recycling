import { Request } from "express";
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
}

export default new HistoryService();
