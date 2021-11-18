import BaseHttpService from "@src/services/BaseHttp.service";
import { Category } from "@src/models/dto/signup.dto";

export default class CategoryService extends BaseHttpService {
  prefix = "/category";

  async getCategoryList() {
    return (await this.get<Category[]>(
      `${this.prefix}?point=false`,
      {},
    )) as Category[];
  }
}
