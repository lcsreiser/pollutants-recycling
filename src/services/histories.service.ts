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

    getByDate = async ({ decoded, body }: Request) => {
        const user: User = await userRepository.findOne({ userId: decoded.userId });

        const historiesByDate = user.histories.map(history => {
            const dateString: string = JSON.stringify(history.date);
            const year: string = dateString.slice(1,5);
            const month: string = dateString.slice(6,8); 
            
            if(body.months.includes(month) && body.years.includes(year)){
                return history
            }
        })
        
        return historiesByDate;
    }
}

export default new HistoryService();
