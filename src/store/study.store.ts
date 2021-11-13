import { RootStore } from "@src/store/root.store";
import { makeAutoObservable } from "mobx";
import StudyService from "@src/services/Study.service";
import { CreateStudyDto, StudyListElement } from "@src/models/dto/study.dto";

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
}
