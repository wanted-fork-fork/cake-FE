import BaseHttpService from "@src/services/BaseHttp.service";
import { Category } from "@src/models/dto/signup.dto";

export default class CategoryService extends BaseHttpService {
  prefix = "/category";

  async getCategoryList(containPoint = false) {
    return (await this.get<Category[]>(
      `${this.prefix}?point=${containPoint ? "true" : "false"}`,
      {},
    )) as Category[];
  }
}
