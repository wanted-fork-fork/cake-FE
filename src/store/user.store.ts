import { makeAutoObservable } from "mobx";

// store
import { RootStore } from "@src/store/root.store";
import AuthService from "@src/services/Auth.service";

// model
import { LoginDto } from "@src/models/dto/user.dto";
import UserMapper from "@src/models/mapper/user.mapper";

export default class UserStore {
  private readonly rootStore: RootStore;

  private readonly authService: AuthService;

  authLoading = true;

  authenticated = false;

  error = "";

  constructor(rootStore: RootStore, authService: AuthService) {
    this.authService = authService;
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }

  async login({ email, password }) {
    try {
      const loginDto: LoginDto = UserMapper.buildLoginDto({ email, password });
      const token = await this.authService.login(loginDto);
      this.authService._saveToken(token);
      return true;
    } catch (e) {
      this.error = e.data;
      return false;
    }
  }

  logout() {
    this.authService.logout();
  }

  async test() {
    const email = await this.authService.test();
    return email;
  }

  async refresh() {
    const token = await this.authService.refresh();
    this.authService._saveToken(token);
  }

  isAuthenticated() {
    const token = this.authService.accessToken;
    this.authLoading = false;
    this.authenticated = token !== null && token.length > 0;
    return this.authenticated;
  }
}
