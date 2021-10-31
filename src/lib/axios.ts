import axios from "axios";
import { Agent, AgentOptions } from "https";

function createAxiosInstance(options: AgentOptions) {
  return axios.create({
    httpsAgent: new Agent({
      rejectUnauthorized: false,
    }),
  });
}

export default { createAxiosInstance };
