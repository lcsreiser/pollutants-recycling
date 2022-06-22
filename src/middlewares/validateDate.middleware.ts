import { NextFunction, Request, Response } from "express";
import { brotliDecompressSync } from "zlib";
import { ErrorHandler } from "../errors/appError";

const validateDate = (req: Request, res: Response, next: NextFunction) => {

        if(!req.body.months || !req.body.years){
            throw new ErrorHandler(400, "It is necessary to inform both months and years keys.")
        }

        req.body.months.forEach(month => {
            if (month.length !== 2) {
                throw new ErrorHandler(400, "A month must have always 2 caracters, like '05'.")
            }
        })

        req.body.years.forEach(year => {
            if (year.length !== 4) {
                throw new ErrorHandler(400, "A year must have always 4 caracters, like '2022'.")
            }
        });

    return next();
}




export default validateDate;