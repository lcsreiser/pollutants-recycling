import { googleApi } from "./googleApi";

interface IDestination {
  addressId: string;
  lat: number;
  lng: number;
}

interface ICityLatLng {
  city?: string;
  lat?: number;
  lng?: number;
}

interface IDistanceMatrixResponse {
  destination_addresses: string[];
  origin_addresses: string[];
  rows: object[];
  status: string;
}

const distanceMatrix = async (
  origin: ICityLatLng,
  destination: IDestination[]
) => {
  let destinationString: string = "";
  let data: IDistanceMatrixResponse;

  destination.forEach((e, i) => {
    destinationString += e.lat + "%2C" + e.lng + "%7C";
  });
  await googleApi
    .get(
      `/distancematrix/json?key=${process.env.GOOGLE_API_KEY}
      &destinations=${destinationString}
      &origins=${origin.lat}, ${origin.lng}`
    )
    .then((response) => {
      if (
        response.data.destination_addresses[
          response.data.destination_addresses.length - 1
        ] === ""
      ) {
        response.data.destination_addresses.pop();
      }
      (data as IDistanceMatrixResponse) = Object.assign({}, response.data);
    })
    .catch((err) => {
      console.error("DistanceMatrix function", err);
    });
  return data;
};

export { distanceMatrix };
