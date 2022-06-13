import { Request, Response, NextFunction } from "express";
import { User } from "../entities/User";
import { googleApi } from "../utils/googleApi";

const obtaintLatLngMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let t = {};
  await googleApi
    .get(
      `/json?key=${process.env.GOOGLE_API_KEY}&address=${
        (req.validated as User).address.zipcode
      }`
    )
    .then((response) => {
      t = { ...response.data.results[0].geometry.location };
      response.data;
      req.location = { ...response.data.results[0].geometry.location };
    })
    .catch((err) => {
      console.log(err);
    });

  await googleApi
    .get(
      `/json?key=${process.env.GOOGLE_API_KEY}&address=${
        (req.location, (req.validated as User).address.number)
      }`
    )
    .then((response) => {})
    .catch((err) => {
      console.log(err);
    });

  return next();
};

export { obtaintLatLngMiddleware };
