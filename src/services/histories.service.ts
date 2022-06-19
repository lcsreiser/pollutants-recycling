import { Request } from "express";

class HistoryService {
    create = ({ decoded, body }: Request) => {
            
    }
}

export default new HistoryService();

//caso a transacao ocorra com um outro usuario deve conter 'receiver'
//no body, caso seja um dumpSpot a key sera 'dumpSpot'