import { Request } from "express";
import { Address, DumpSpot } from "../entities";
import { addressRepository, dumpSpotRepository } from "../repositories";
import { serializedCreateDumpSpotSchema } from "../schemas";

class DumpSpotService {
  create = async ({ validated, location }: Request) => {
    const address: Address = await addressRepository.save({
      ...(location as Address),
    });

    const newDumpSpot: DumpSpot = await dumpSpotRepository.save({...(validated as Partial<DumpSpot>), address}
      
    );
    return await serializedCreateDumpSpotSchema.validate(newDumpSpot, {
      stripUnknown: true,
    });
  };

  retrieve = async ({ params }: Request) => {
    const dumpSpot: DumpSpot = await dumpSpotRepository.findOne({
      dumpSpot_id: params.dumpSpot_id,
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

  retieveAll = async () => {
    const dumpSpots = await dumpSpotRepository.all();

    return dumpSpots;
  };

  delete = async (id: string) => {
    const dumpSpot = await dumpSpotRepository.findOne({ id: id });
    await dumpSpotRepository.delete(dumpSpot.dumpSpot_id);

    return true;
  };
}

export default new DumpSpotService();
