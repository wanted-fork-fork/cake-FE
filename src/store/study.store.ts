import { RootStore } from "@src/store/root.store";
import { makeAutoObservable } from "mobx";
import StudyService from "@src/services/Study.service";
import {
  CreateStudyDto,
  StudyDetailDto,
  StudyListElement,
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

  async createStudy(props: CreateStudyDto) {
    return (await this.studyService.createStudy(props)) as string;
  }

  async getStudyFeed(page: number): Promise<StudyListElement[]> {
    return (await this.studyService.getStudyFeed(page)) as StudyListElement[];
  }

  async getFilteredStudy(
    page: number,
    give: number,
    take: number,
    type: StudyType,
  ): Promise<StudyListElement[]> {
    return (await this.studyService.getFilteredStudy(
      page,
      give,
      take,
      type,
    )) as StudyListElement[];
  }

  async getMyStudyList(): Promise<StudyListElement[]> {
    return (await this.studyService.getMyStudyList()) as StudyListElement[];
  }

  async getMyOtherStudyList(): Promise<StudyListElement[]> {
    return (await this.studyService.getMyOtherStudyList()) as StudyListElement[];
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
