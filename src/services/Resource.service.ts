import BaseHttpService from "@src/services/BaseHttp.service";
import { Resource } from "@src/models/dto/api-response";

export default class ResourceService extends BaseHttpService {
  async uploadImage(file: File): Promise<Resource> {
    return (await this.postFile<Resource>("/file", file)) as Resource;
  }
}
