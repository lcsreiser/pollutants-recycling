import { Request } from "express";
import { DumpSpot } from "../entities";
import { dumpSpotRepository } from "../repositories";
import { serializedCreateDumpSpotSchema } from "../schemas";

class DumpSpotService {
  create = async ({ validated }: Request) => {
    const newDumpSpot = await dumpSpotRepository.save(
      validated as Partial<DumpSpot>
    );

    return await serializedCreateDumpSpotSchema.validate(newDumpSpot, {
      stripUnknown: true,
    });
  };

  retrieve = async ({ params }: Request) => {
    const dumpSpot = await dumpSpotRepository.findOne({
      dumpSpot_id: params.dumpSpot_id,
    });

    return await serializedCreateDumpSpotSchema.validate(dumpSpot, {
      stripUnknown: true,
    });
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
