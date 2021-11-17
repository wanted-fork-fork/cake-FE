import { createContext, useContext } from "react";

import UserStore from "@src/store/user.store";
import AuthService from "@src/services/Auth.service";

import Axios from "@src/lib/axios";
import { AxiosInstance } from "axios";
import SignupStore from "@src/store/signup.store";
import SignupService from "@src/services/Signup.service";
import ResourceService from "@src/services/Resource.service";
import CategoryService from "@src/services/Category.service";
import CategoryStore from "@src/store/category.store";
import StudyService from "@src/services/Study.service";
import StudyStore from "@src/store/study.store";
import { FolderType } from "@src/constant/enum.constant";

export class RootStore {
  axiosInstance: AxiosInstance;

  userStore: UserStore;

  signupStore: SignupStore;

  categoryStore: CategoryStore;

  studyStore: StudyStore;

  resourceService: ResourceService;

  constructor() {
    this.axiosInstance = Axios.createAxiosInstance();

    const authService = new AuthService(this.axiosInstance);
    const signupService = new SignupService(this.axiosInstance);
    const resourceService = new ResourceService(this.axiosInstance);
    const categoryService = new CategoryService(this.axiosInstance);
    const studyService = new StudyService(this.axiosInstance);

    this.resourceService = resourceService;

    this.userStore = new UserStore(this, authService);
    this.categoryStore = new CategoryStore(this, categoryService);
    this.signupStore = new SignupStore(this, signupService);
    this.studyStore = new StudyStore(this, studyService);
  }

  async uploadImage(file, path: FolderType) {
    return this.resourceService.uploadImage(file, path);
  }
}

export const StoresContext = createContext(new RootStore());
export const useStores = () => useContext(StoresContext);
