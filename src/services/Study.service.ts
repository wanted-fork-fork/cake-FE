import BaseHttpService from "@src/services/BaseHttp.service";
import { CreateStudyDto, StudyListElement } from "@src/models/dto/study.dto";

export default class StudyService extends BaseHttpService {
  prefix = "/study";

  async createStudy(createStudyDto: CreateStudyDto): Promise<string> {
    return (await this.post<string>(this.prefix, createStudyDto)) as string;
  }

  async getStudyFeed(page: number): Promise<StudyListElement[]> {
    return (await this.get<StudyListElement[]>(
      `/page?page=${page}`,
    )) as StudyListElement[];
  }
}
