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

  constructor(rootStore: RootStore, authService: AuthService) {
    this.authService = authService;
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }

  async login({ email, password }) {
    const loginDto: LoginDto = UserMapper.buildLoginDto({ email, password });
    await this.authService.login(loginDto);
  }
}
