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
    if (i % 2 === 0) {
      destinationString += e.lat + "%2C" + e.lng;
    } else {
      destinationString += "%7C" + e.lat + "%2C" + e.lng;
    }
  });

  await googleApi
    .get(
      `/distancematrix/json?key=${process.env.GOOGLE_API_KEY}
      &destinations=${destinationString}
      &origins=${origin.lat}, ${origin.lng}`
    )
    .then((response) => {
      (data as IDistanceMatrixResponse) = Object.assign({}, response.data);
    })
    .catch((err) => {
      console.error("DistanceMatrix function", err);
    });

  return data;
};

export { distanceMatrix };
