import axios from "axios";
interface ICompleteAddress {
  address: string;
  city: string;
  number: number;
}

interface ILatitudeLongitude {
  latitude: string;
  longitude: string;
}

const obtainLatitudeLongitude = async ({
  address,
  city,
  number,
}: ICompleteAddress): Promise<ILatitudeLongitude> => {
  let latLon = {} as ILatitudeLongitude;
  await axios
    .get(
      `http://api.positionstack.com/v1/forward?access_key=111c1e1c13933946ae2558c3e8ce9781&query=${address}, ${number}`
    )
    .then((response) => {
      const { latitude, longitude } = response.data.data[0];

      latLon = {
        latitude: latitude,
        longitude: longitude,
      };
    })
    .catch((err) => {
      console.log(err);
    });

  return latLon;
};

export { obtainLatitudeLongitude };
