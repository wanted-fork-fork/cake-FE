import { RootStore } from "@src/store/root.store";
import CategoryService from "@src/services/Category.service";
import { makeAutoObservable } from "mobx";
import { Category } from "@src/models/dto/signup.dto";

export default class CategoryStore {
  private readonly rootStore: RootStore;

  private readonly categoryService: CategoryService;

  categoryList: Category[] = [];

  constructor(rootStore: RootStore, categoryService: CategoryService) {
    this.rootStore = rootStore;
    this.categoryService = categoryService;

    makeAutoObservable(this);
  }

  async getCategoryList() {
    if (this.categoryList.length === 0) {
      const categoryList = await this.categoryService.getCategoryList();
      this.categoryList = [...categoryList];
    }

    return this.categoryList;
  }
}
