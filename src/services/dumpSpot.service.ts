import { Request } from "express";
import { Address, DumpSpot } from "../entities";
import { addressRepository, dumpSpotRepository } from "../repositories";
import { serializedCreateDumpSpotSchema } from "../schemas";

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

  retrieveAll = async ({ params, body }: Request) => {
    const dumpSpots: DumpSpot[] = await dumpSpotRepository.all();
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
