import BaseHttpService from "@src/services/BaseHttp.service";
import {
  CreateStudyDto,
  StudyDetailDto,
  StudyListElement,
} from "@src/models/dto/study.dto";
import { StudyType } from "@src/constant/enum.constant";

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
    give: number,
    take: number,
    type: StudyType,
  ): Promise<StudyListElement[]> {
    return (await this.get<StudyListElement[]>(
      `/page?page=${page}&give=${give}&take=${take}&type=${type}`,
    )) as StudyListElement[];
  }

  async getMyStudyList(): Promise<StudyListElement[]> {
    return (await this.get<StudyListElement[]>(
      `${this.prefix}/myStudy/mine`,
    )) as StudyListElement[];
  }

  async getMyOtherStudyList(): Promise<StudyListElement[]> {
    return (await this.get<StudyListElement[]>(
      `${this.prefix}/myStudy/other`,
    )) as StudyListElement[];
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
