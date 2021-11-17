import BaseHttpService from "@src/services/BaseHttp.service";
import {
  CreateStudyDto,
  StudyDetailDto,
  StudyListElement,
  StudyManageListElement,
} from "@src/models/dto/study.dto";

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

  async getFilteredStudy(
    page: number,
    give: string | string[],
    take: string | string[],
    type: string | string[],
  ): Promise<StudyListElement[]> {
    return (await this.get<StudyListElement[]>(
      `/page/filter?page=${page}&give=${give}&take=${take}&type=${type}`,
    )) as StudyListElement[];
  }

  async getMyStudyList(): Promise<StudyManageListElement[]> {
    return (await this.get<StudyManageListElement[]>(
      `${this.prefix}/myStudy/mine`,
    )) as StudyManageListElement[];
  }

  async getMyOtherStudyList(): Promise<StudyManageListElement[]> {
    return (await this.get<StudyManageListElement[]>(
      `${this.prefix}/myStudy/other`,
    )) as StudyManageListElement[];
  }

  async getStudyDetail(id: number): Promise<StudyDetailDto> {
    return (await this.get<StudyDetailDto>(
      `${this.prefix}?id=${id}`,
    )) as StudyDetailDto;
  }

  async applyStudy(
    id: number,
    content: string,
    images: string[] = [],
  ): Promise<string> {
    return (await this.post<string>(`${this.prefix}/apply`, {
      id,
      content,
      images,
    })) as string;
  }
}
