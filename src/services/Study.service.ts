import BaseHttpService from "@src/services/BaseHttp.service";
import {
  CreateStudyDto,
  StudyApplyDetail,
  StudyDetailDto,
  StudyFilteringDto,
  StudyListElement,
  StudyManageListElement,
  StudyMemberInfo,
} from "@src/models/dto/study.dto";
import { StudyState } from "@src/constant/enum.constant";

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
  ): Promise<StudyFilteringDto> {
    return (await this.get<StudyFilteringDto>(
      `/page/filter?page=${page}&give=${give}&take=${take}&type=${type}`,
    )) as StudyFilteringDto;
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

  async findAllStudyMember(id) {
    return (await this.get<StudyMemberInfo[]>(
      `/studymember/all?studyId=${id}`,
    )) as StudyMemberInfo[];
  }

  async findStudyMemberDetail(memberId) {
    return (await this.get<StudyApplyDetail>(
      `/studymember/detail?studyMemberId=${memberId}`,
    )) as StudyApplyDetail;
  }

  async approveStudyMember(studyMemberId: number, state: StudyState) {
    return (await this.post<string>(`/studymember/approval`, {
      studyMemberId,
      state,
    })) as string;
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
