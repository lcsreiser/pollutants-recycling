import { Request } from "express";
import { Address, DumpSpot } from "../entities";
import { addressRepository, dumpSpotRepository } from "../repositories";
import { serializedCreateDumpSpotSchema } from "../schemas";

class DumpSpotService {
  create = async ({ validated, location }: Request) => {
    const newDumpSpot = await dumpSpotRepository.save(
      validated as Partial<DumpSpot>
    );
    const address: Address = await addressRepository.save({
      ...(location as Address),
    });


    return await serializedCreateDumpSpotSchema.validate(newDumpSpot, {
      stripUnknown: true,
    });
  };

  retrieve = async ({ params }: Request) => {
    const dumpSpot = await dumpSpotRepository.findOne({
      dumpSpot_id: params.dumpSpot_id,
    });
  }

  update = async ({ params, body }: Request) => {
    await dumpSpotRepository.update(params.dumpSpot_id, { ...body });

    const updatedDumpSpot: DumpSpot | null = await dumpSpotRepository.findOne({ dumpSpot_id: params.dumpSpot_id })
    return await serializedCreateDumpSpotSchema.validate(updatedDumpSpot, {
      stripUnknown: true
    });
  }

}

export default new DumpSpotService();
