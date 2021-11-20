import { RootStore } from "@src/store/root.store";
import { makeAutoObservable } from "mobx";
import StudyService from "@src/services/Study.service";
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

export default class StudyStore {
  private readonly rootStore: RootStore;

  private readonly studyService: StudyService;

  constructor(rootStore: RootStore, studyService: StudyService) {
    this.rootStore = rootStore;
    this.studyService = studyService;

    makeAutoObservable(this);
  }

  async createStudy(props: CreateStudyDto) {
    return (await this.studyService.createStudy(props)) as string;
  }

  async getStudyFeed(page: number): Promise<StudyListElement[]> {
    return (await this.studyService.getStudyFeed(page)) as StudyListElement[];
  }

  async getFilteredStudy(
    page: number,
    give: string | string[],
    take: string | string[],
    type: string | string[],
  ): Promise<StudyFilteringDto> {
    return (await this.studyService.getFilteredStudy(
      page,
      give,
      take,
      type,
    )) as StudyFilteringDto;
  }

  async getMyStudyList(): Promise<StudyManageListElement[]> {
    return (await this.studyService.getMyStudyList()) as StudyManageListElement[];
  }

  async getMyOtherStudyList(): Promise<StudyManageListElement[]> {
    return (await this.studyService.getMyOtherStudyList()) as StudyManageListElement[];
  }

  async getStudyDetail(id: number): Promise<StudyDetailDto> {
    return (await this.studyService.getStudyDetail(id)) as StudyDetailDto;
  }

  async findAllStudyMember(id) {
    return (await this.studyService.findAllStudyMember(
      id,
    )) as StudyMemberInfo[];
  }

  async findStudyMemberDetail(memberId) {
    return (await this.studyService.findStudyMemberDetail(
      memberId,
    )) as StudyApplyDetail;
  }

  async approveStudyMember(studyMemberId: number, state: StudyState) {
    return (await this.studyService.approveStudyMember(
      studyMemberId,
      state,
    )) as string;
  }

  async applyStudy(
    id: number,
    content: string,
    images: string[] = [],
  ): Promise<boolean> {
    try {
      await this.studyService.applyStudy(id, content, images);
      return true;
    } catch (e) {
      return false;
    }
  }
}
