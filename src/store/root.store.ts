import { createContext, useContext } from "react";

import CountStore from "@src/store/count.store";
import UserStore from "@src/store/user.store";
import AuthService from "@src/services/Auth.service";

import Axios from "@src/lib/axios";
import { AxiosInstance } from "axios";

export class RootStore {
  axiosInstance: AxiosInstance;

  countStore: CountStore;

  userStore: UserStore;

  constructor() {
    this.axiosInstance = Axios.createAxiosInstance();

    const authService = new AuthService(this.axiosInstance);

    this.countStore = new CountStore(this);
    this.userStore = new UserStore(this, authService);
  }
}

export const StoresContext = createContext(new RootStore());
export const useStores = () => useContext(StoresContext);
