import BaseHttpService from "@src/services/BaseHttp.service";
import { Resource } from "@src/models/dto/api-response";
import { FolderType } from "@src/constant/enum.constant";

export default class ResourceService extends BaseHttpService {
  async uploadImage(file: File, folder: FolderType): Promise<Resource> {
    return (await this.postFile<Resource>(
      `/file?folder=${folder}`,
      file,
    )) as Resource;
  }
}
