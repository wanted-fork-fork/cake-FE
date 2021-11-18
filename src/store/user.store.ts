import { makeAutoObservable } from "mobx";

// store
import { RootStore } from "@src/store/root.store";
import AuthService from "@src/services/Auth.service";

// model
import { LoginDto, UserMyPageDto } from "@src/models/dto/user.dto";
import UserMapper from "@src/models/mapper/user.mapper";
import UserService from "@src/services/User.service";

export default class UserStore {
  private readonly rootStore: RootStore;

  private readonly authService: AuthService;

  private readonly userService: UserService;

  authLoading = true;

  authenticated = false;

  error = "";

  myUniv = null;

  myProfile: UserMyPageDto | null = null;

  constructor(
    rootStore: RootStore,
    authService: AuthService,
    userService: UserService,
  ) {
    this.authService = authService;
    this.userService = userService;
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

  async getMyUniv() {
    if (!this.myUniv)
      this.myUniv = (await this.userService.findUserUniv()) as string;
  }

  async getMyProfile() {
    if (!this.myProfile)
      this.myProfile =
        (await this.userService.findMyPageProfile()) as UserMyPageDto;
  }
}
