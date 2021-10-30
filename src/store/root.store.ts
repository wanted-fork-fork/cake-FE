import { createContext, useContext } from "react";

import CountStore from "@src/store/count.store";

export class RootStore {
  countStore: CountStore;

  constructor() {
    this.countStore = new CountStore(this);
  }
}

export const StoresContext = createContext(new RootStore());
export const useStores = () => useContext(StoresContext);
