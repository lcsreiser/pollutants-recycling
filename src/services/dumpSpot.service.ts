import { Request } from "express";
import { Address, DumpSpot } from "../entities";
import { addressRepository, dumpSpotRepository } from "../repositories";
import { serializedCreateDumpSpotSchema } from "../schemas";
import obtainLocation from "../utils/obtainLocation";

class DumpSpotService {
  create = async ({ validated, location }: Request) => {
    const address: Address = await addressRepository.save({
      ...(location as Address),
    });

    const newDumpSpot: DumpSpot = await dumpSpotRepository.save({
      ...(validated as Partial<DumpSpot>),
      address,
    });
    return await serializedCreateDumpSpotSchema.validate(newDumpSpot, {
      stripUnknown: true,
    });
  };

  retrieveAll = async ({body, decoded }: Request) => {
    let city: string = "";
    
    if (body.zipCode) {
      city = await obtainLocation(body.zipCode);
    }else{
      city = decoded.address.city;
    }
    console.log("city", city)
    const dumpSpotsAddresses: Address[] = await addressRepository.retrieve(city);
    console.log("dumpSpotsAddresses", dumpSpotsAddresses)
    
    const dumpSpots: DumpSpot[] = await Promise.all( dumpSpotsAddresses.map(async dumpSpotAddress => await dumpSpotRepository.findOne({address: dumpSpotAddress.addressId})));

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
}

export default new DumpSpotService();
