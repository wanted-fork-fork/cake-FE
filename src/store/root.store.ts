import { createContext, useContext } from "react";

import UserStore from "@src/store/user.store";
import AuthService from "@src/services/Auth.service";

import Axios from "@src/lib/axios";
import { AxiosInstance } from "axios";
import SignupStore from "@src/store/signup.store";
import SignupService from "@src/services/Signup.service";

export class RootStore {
  axiosInstance: AxiosInstance;

  userStore: UserStore;

  signupStore: SignupStore;

  constructor() {
    this.axiosInstance = Axios.createAxiosInstance();

    const authService = new AuthService(this.axiosInstance);
    const signupService = new SignupService(this.axiosInstance);

    this.userStore = new UserStore(this, authService);
    this.signupStore = new SignupStore(this, signupService);
  }
}

export const StoresContext = createContext(new RootStore());
export const useStores = () => useContext(StoresContext);
