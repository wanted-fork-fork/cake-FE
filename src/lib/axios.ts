import axios from "axios";
import { Agent, AgentOptions } from "https";

export function createAxiosInstance(options: AgentOptions) {
  return axios.create({
    httpsAgent: new Agent({
      rejectUnauthorized: !process.env.IS_DEV,
      ...options,
    }),
  });
}

export default {};
