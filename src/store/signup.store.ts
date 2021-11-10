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

  form: SignupForm = {
    email: "",
    pwd: null,
    nickname: null,
    img: null,
    univCategory: "",
    univ: "",
  };

  constructor(rootStore: RootStore, signupService: SignupService) {
    this.rootStore = rootStore;
    this.signupService = signupService;

    makeAutoObservable(this);
  }

  // 에러 초기화
  _cleanErrors() {
    this.errors = {};
  }

  setFormValue(name, value) {
    this.form = { ...this.form, [name]: value };
  }

  // 대학 및 도메인 리스트를 요청
  async findAllUniv() {
    this.univList = await this.signupService.findAllUniv();
  }

  // 이메일 중복 확인 후 인증 메일을 전송
  async sendCertificationMail(email: string) {
    try {
      // 중복 이메일이면 400 에러 발생
      await this.signupService.checkOverlapEmail({ email });

      // 중복 이메일이 아닐 경우 메일을 전송
      await this.signupService.sendCertificationMail({ email });

      this.form.email = email;

      this._cleanErrors();

      return true;
    } catch (e) {
      if (e.code === 400) {
        this.errors = { email: e.message };
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

      this._cleanErrors();

      return true;
    } catch (e) {
      if (e.code === 400) {
        this.errors = { email: e.message };
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

      this._cleanErrors();
      this.emailConfirmed = true;

      return true;
    } catch (e) {
      if (e.code === 400) {
        this.errors = { email: e.message };
      }
      return false;
    }
  }

  // 회원가입 요청
  async signup({ pwd, nickname, img = null, univCategory, univ }) {
    await this.signupService.signupUser({
      email: this.form.email,
      pwd,
      nickname,
      img,
      univCategory,
      univ,
    });
    return true;
  }
}
