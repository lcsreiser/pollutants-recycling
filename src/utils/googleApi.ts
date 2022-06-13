import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

const googleApi = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api`,
});

export { googleApi };
