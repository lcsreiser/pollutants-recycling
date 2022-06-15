import { googleApi } from "../utils/googleApi";

const obtainLocation = async (zipCode) =>{
    let location = "";
    await googleApi
    .get(
      `/geocode/json?key=${
        process.env.GOOGLE_API_KEY
      }&address=${encodeURIComponent(zipCode)}`
    )
    .then((response) => {
       location = {
        ...response.data.results[0].address_components[3].long_name,
      };
    })
    .catch((err) => {
      console.log(err);
    });


    return location;
}

export default obtainLocation;