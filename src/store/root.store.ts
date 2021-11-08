import { createContext, useContext } from "react";

import UserStore from "@src/store/user.store";
import AuthService from "@src/services/Auth.service";

import Axios from "@src/lib/axios";
import { AxiosInstance } from "axios";

export class RootStore {
  axiosInstance: AxiosInstance;

  userStore: UserStore;

  constructor() {
    this.axiosInstance = Axios.createAxiosInstance();

    const authService = new AuthService(this.axiosInstance);

    this.userStore = new UserStore(this, authService);
  }
}

export const StoresContext = createContext(new RootStore());
export const useStores = () => useContext(StoresContext);
