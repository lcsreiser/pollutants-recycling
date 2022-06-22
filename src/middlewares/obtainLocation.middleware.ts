import { Request, Response, NextFunction, response } from "express";
import { DumpSpot } from "../entities";
import { User } from "../entities/User";
import { ErrorHandler } from "../errors/appError";
import { googleApi } from "../utils/googleApi";

const obtaintLocationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // pegar o nome da rua referente ao CEP informado pelo usuário
  await googleApi
    .get(
      `/geocode/json?key=${
        process.env.GOOGLE_API_KEY
      }&address=${encodeURIComponent((req.validated as User | DumpSpot).address.zipCode)}`
    )
    .then((response) => {
      req.location = {
        ...response.data.results[0].address_components,
      };
    })
    .catch((err) => {
      throw new ErrorHandler(400, "zipCode not exists")
      console.log(err);
    });

  // pegar a lat e lon baseado na rua e número do endereço do usuário
  await googleApi
    .get(
      `/geocode/json?key=${
        process.env.GOOGLE_API_KEY
      }&address=${encodeURIComponent(req.location[1].long_name)},
      ${encodeURIComponent((req.validated as User | DumpSpot).address.number)}, 
      ${encodeURIComponent((req.validated as User | DumpSpot).address.zipCode)}`
    )
    .then((response) => {
      req.location = {
        zipCode: (req.validated as User | DumpSpot).address.zipCode,
        street: response.data.results[0].address_components[1].long_name,
        number: (req.validated as User | DumpSpot).address.number,
        complement: (req.validated as User | DumpSpot).address.complement,
        city: response.data.results[0].address_components[3].long_name,
        state: response.data.results[0].address_components[4].short_name,
        // full_address: response.data.results[0].formatted_address,
        latitude: response.data.results[0].geometry.location.lat,
        longitude: response.data.results[0].geometry.location.lng,
        isDumpSpot: (req.validated as User | DumpSpot).address.isDumpSpot,
      };
    })
    .catch((err) => {
      return res.status(400).json(err)
    });

  return next();
};

export { obtaintLocationMiddleware };
