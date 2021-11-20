import { RootStore } from "@src/store/root.store";
import { makeAutoObservable } from "mobx";
import StudyService from "@src/services/Study.service";
import {
  CreateStudyDto,
  StudyDetailDto,
  StudyFilteringDto,
  StudyListElement,
  StudyManageListElement,
} from "@src/models/dto/study.dto";
import { StudyType } from "@src/constant/enum.constant";

export default class StudyStore {
  private readonly rootStore: RootStore;

  private readonly studyService: StudyService;

  constructor(rootStore: RootStore, studyService: StudyService) {
    this.rootStore = rootStore;
    this.studyService = studyService;

    makeAutoObservable(this);
  }

  async createStudy(props: {
    peopleCnt: number;
    give: any[];
    images: string[];
    endDate: string;
    title: string;
    type: StudyType;
    content: string;
    point: string | number;
    take: any[];
    storeAddress: string;
    storeName: string;
    roomPwd: string;
    startDate: string;
    chatRoom: string;
  }) {
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
