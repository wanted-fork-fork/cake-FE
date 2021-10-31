import { createContext, useContext } from "react";

import CountStore from "@src/store/count.store";
import UserStore from "@src/store/user.store";
import AuthService from "@src/services/Auth.service";

export class RootStore {
  countStore: CountStore;

  userStore: UserStore;

  constructor() {
    const authService = new AuthService();

    this.countStore = new CountStore(this);
    this.userStore = new UserStore(this, authService);
  }
}

export const StoresContext = createContext(new RootStore());
export const useStores = () => useContext(StoresContext);
