import axios, { AxiosResponse } from "axios";
import { Request } from "express";

interface IZipCode {
  address: string;
  city: string;
}

const searchZipCode = async (zipCode: number): Promise<IZipCode> => {
  let data = {} as IZipCode;
  await axios
    .get(`https://ws.apicep.com/cep/${zipCode}.json`)
    .then((response) => {
      data = { ...response.data };
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};

export { searchZipCode };
