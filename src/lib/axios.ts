import axios from "axios";
import { Agent } from "https";

function createAxiosInstance() {
  return axios.create({
    httpsAgent: new Agent({
      rejectUnauthorized: false,
    }),
    withCredentials: true,
  });
}

export default { createAxiosInstance };
