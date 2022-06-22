import { Request } from "express";
import { Address, Category, DumpSpot } from "../entities";
import { ErrorHandler } from "../errors/appError";
import {
  addressRepository,
  categoryRepository,
  dumpSpotRepository,
} from "../repositories";
import route from "../routes/dumpSpot.routes";
import { serializedCreateDumpSpotSchema } from "../schemas";
import { distanceMatrix } from "../utils/distanceMatrix";
import obtainLocation from "../utils/obtainLocation";
interface ICityLatLng {
  city?: string;
  lat?: number;
  lng?: number;
}

interface IDestination {
  addressId: string;
  lat: number;
  lng: number;
}

interface IDistanceMatrixResponse {
  destination_addresses: Array<string>;
  origin_addresses: Array<string>;
  rows: Array<object>;
  status: string;
}

interface IRoute {
  destination_address: string;
  distance: string;
  duration: string;
}
class DumpSpotService {
  create = async ({ validated, location }: Request) => {

    if ((await dumpSpotRepository.all()).map(item => item.name).includes(validated.name)){
      throw new ErrorHandler(409, `${validated.name} already exists`)
    }

    const address: Address = await addressRepository.save({
      ...(location as Address),
    });
    const { categories } = validated as DumpSpot;

    const category: Category = await categoryRepository.findOne({
      name: categories,
    });

    if (!category) throw new ErrorHandler(400, "Category doesn't exists");

    const newDumpSpot: DumpSpot = await dumpSpotRepository.save({
      ...(validated as Partial<DumpSpot>),
      address,
      categories: [category],
    });


    return await serializedCreateDumpSpotSchema.validate(newDumpSpot, {
      stripUnknown: true,
    });
  };

  retrieveAll = async ({ body, decoded }: Request) => {
    let cityToSearch: string = "";

    if (body.zipCode) {
      const { city } = await obtainLocation(body.zipCode);
      cityToSearch = city;
    } else {
      let city = decoded.address.city;
      cityToSearch = city;
    }

    const dumpSpotsAddresses: Address[] = await addressRepository.retrieve(
      cityToSearch
    );

    if (dumpSpotsAddresses.length === 0) {
      throw new ErrorHandler(404, "DumpSpots not found in informed city");
    }

    const dumpSpots: DumpSpot[] = await Promise.all(
      dumpSpotsAddresses.map(
        async (dumpSpotAddress) =>
          await dumpSpotRepository.findOne({ address: dumpSpotAddress })
      )
    );

    return dumpSpots;
  };

  update = async ({ params, body }: Request) => {
    await dumpSpotRepository.update(params.dumpSpot_id, { ...body });

    const updatedDumpSpot: DumpSpot | null = await dumpSpotRepository.findOne({
      dumpSpot_id: params.dumpSpot_id,
    });
    return await serializedCreateDumpSpotSchema.validate(updatedDumpSpot, {
      stripUnknown: true,
    });
  };

  retrieveByDistance = async ({ body, decoded, params }: Request) => {
    let geoLocation: ICityLatLng;
    let destinationsPoints: IDestination[] = [];
    let distanceMatrixResponse: IDistanceMatrixResponse;
    let route: IRoute[] = [];
    if (body.zipCode) {
      geoLocation = await obtainLocation(body.zipCode);
      delete geoLocation.city;
    } else {
      geoLocation = {
        lat: decoded.address.latitude,
        lng: decoded.address.longitude,
      };
    }

    const dumpSpotsAddresses: Address[] =
      await addressRepository.retrieveAllDumpSpots();

    if (dumpSpotsAddresses.length === 0) {
      throw new ErrorHandler(404, "DumpSpots not found");
    }

    dumpSpotsAddresses.forEach((e) => {
      destinationsPoints.push({
        addressId: e.addressId,
        lat: e.latitude,
        lng: e.longitude,
      });
    });

    distanceMatrixResponse = await distanceMatrix(
      geoLocation,
      destinationsPoints
    );

    if (params.radius !== undefined) {
      let ratioInMeters: number = Number(params.radius) * 1000;
      distanceMatrixResponse.destination_addresses.forEach((e, i) => {
        if (
          distanceMatrixResponse.rows[0]["elements"][i]["distance"]["value"] <=
          ratioInMeters
        ) {
          route.push({
            destination_address: e,
            distance:
              distanceMatrixResponse.rows[0]["elements"][i]["distance"]["text"],
            duration:
              distanceMatrixResponse.rows[0]["elements"][i]["duration"]["text"],
          });
        }
      });

      return {
        origin_addresses: distanceMatrixResponse["origin_addresses"][0],
        route,
      };
    }

    distanceMatrixResponse.destination_addresses.forEach((e, i) => {
      route.push({
        destination_address: e,
        distance:
          distanceMatrixResponse.rows[0]["elements"][i]["distance"]["text"],
        duration:
          distanceMatrixResponse.rows[0]["elements"][i]["duration"]["text"],
      });
    });

    return {
      origin_addresses: distanceMatrixResponse["origin_addresses"][0],
      route,
    };
  };
}

export default new DumpSpotService();
