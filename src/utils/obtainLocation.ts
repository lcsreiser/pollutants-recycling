import { googleApi } from "../utils/googleApi";

interface CityLatLng {
  city?: string;
  lat?: number;
  lng?: number;
}

const obtainLocation = async (zipCode): Promise<CityLatLng> => {
  let location: CityLatLng;
  await googleApi
    .get(
      `/geocode/json?key=${
        process.env.GOOGLE_API_KEY
      }&address=${encodeURIComponent(zipCode)}`
    )
    .then((response) => {
      location = {
        city: response.data.results[0].address_components[3]["short_name"],
        lat: response.data.results[0].geometry.location.lat,
        lng: response.data.results[0].geometry.location.lng,
      };
    })
    .catch((err) => {
      console.log(err);
    });

  return location;
};

export default obtainLocation;

// const obtainLocation = async (zipCode) =>{
//   let location: string = "";
//   await googleApi
//   .get(
//     `/geocode/json?key=${
//       process.env.GOOGLE_API_KEY
//     }&address=${encodeURIComponent(zipCode)}`
//   )
//   .then((response) => {
//      location = response.data.results[0].address_components[3]["short_name"];
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   return location;
// }
