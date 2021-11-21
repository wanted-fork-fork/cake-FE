import BaseHttpService from "@src/services/BaseHttp.service";
import { Category } from "@src/models/dto/signup.dto";

export default class CategoryService extends BaseHttpService {
  prefix = "/category";

  // eslint-disable-next-line
  async getCategoryList(containPoint = false) {
    return (await this.get<Category[]>(
      `${this.prefix}?point=true`,
      {},
    )) as Category[];
  }
}
