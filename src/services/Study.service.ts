import BaseHttpService from "@src/services/BaseHttp.service";
import { CreateStudyDto } from "@src/models/dto/study.dto";

export default class StudyService extends BaseHttpService {
  prefix = "/study";

  async createStudy(createStudyDto: CreateStudyDto): Promise<string> {
    return (await this.post<string>(this.prefix, createStudyDto)) as string;
  }
}
