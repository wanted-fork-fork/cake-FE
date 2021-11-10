import { makeAutoObservable } from "mobx";

// stores
import { RootStore } from "@src/store/root.store";
import SignupService from "@src/services/Signup.service";

// Models
import { SignupForm, Univ } from "@src/models/dto/signup.dto";

export type SignupFormError = {
  email?: string;
  pwd?: string;
  nickname?: string;
  img?: string;
  univCategory?: string;
  univ?: string;
};

export default class SignupStore {
  private readonly rootStore: RootStore;

  private readonly signupService: SignupService;

  univList: Univ[] = [];

  errors: SignupFormError = {};

  emailConfirmed = false;

  loading = false;

  completedSignup = false;

  form: SignupForm = {
    email: "",
    pwd: null,
    nickname: null,
    img: null,
    univCategory: "",
    univ: "",
    give: [],
    take: [],
  };

  constructor(rootStore: RootStore, signupService: SignupService) {
    this.rootStore = rootStore;
    this.signupService = signupService;

    makeAutoObservable(this);
  }

  // 에러 초기화
  cleanErrors() {
    this.errors = {};
  }

  setFormValue(name, value) {
    this.form = { ...this.form, [name]: value };
  }

  setErrorValue(name, value) {
    this.errors = { ...this.errors, [name]: value };
  }

  // 대학 및 도메인 리스트를 요청
  async findAllUniv() {
    this.univList = await this.signupService.findAllUniv();
  }

  // 이메일 중복 확인 후 인증 메일을 전송
  async sendCertificationMail(email: string) {
    try {
      // 중복 이메일이면 400 에러 발생
      if (email !== "nijey08@ajou.ac.kr")
        await this.signupService.checkOverlapEmail({ email });

      // 중복 이메일이 아닐 경우 메일을 전송
      await this.signupService.sendCertificationMail({ email });

      this.form.email = email;

      this.cleanErrors();

      return true;
    } catch (e) {
      if (e.code === 400) {
        this.errors = { email: e.data };
      }
      return false;
    }
  }

  async checkNicknameOverlap(nickname: string) {
    try {
      await this.signupService.checkOverlapNickname({ nickname });
      this.form.nickname = nickname;
      this.cleanErrors();
      return true;
    } catch (e) {
      if (e.code === 400) {
        this.errors = { nickname: e.data };
      }
      return false;
    }
  }

  // 인증 메일 재전송 요청
  async sendAgainCertificationMail() {
    try {
      await this.signupService.sendCertificationMail({
        email: this.form.email,
      });

      this.cleanErrors();

      return true;
    } catch (e) {
      if (e.code === 400) {
        this.errors = { email: e.data };
      }
      return false;
    }
  }

  // 이메일 인증 코드 확인
  async confirmCertification(code: string) {
    try {
      // 코드 틀렸을 경우 400 에러 발생
      await this.signupService.confirmCertification({
        email: this.form.email,
        code,
      });

      this.cleanErrors();
      this.emailConfirmed = true;
      this.errors = { email: "인증되었습니다." };

      return true;
    } catch (e) {
      if (e.code === 400) {
        this.errors = { email: e.data };
      }
      return false;
    }
  }

  // 회원가입 요청
  async signup() {
    this.loading = true;
    this.completedSignup = false;

    await this.signupService.signupUser({
      ...this.form,
    });

    this.loading = false;
    this.completedSignup = true;

    return true;
  }
}
