import BaseHttpService from "@src/services/BaseHttp.service";
import { LoginDto } from "@src/models/dto/user.dto";
import { API_PREFIX } from "@src/constant/api.constant";

export default class AuthService extends BaseHttpService {
  prefix = API_PREFIX.AUTH;

  async login(loginDto: LoginDto): Promise<string> {
    return (await this.post<string>(
      `${this.prefix}/login`,
      loginDto,
    )) as string;
  }

  logout() {
    this.removeToken();
  }

  async test(): Promise<string> {
    return (await this.get<string>(`${this.prefix}/test`)) as string;
  }

  async refresh(): Promise<string> {
    return (await this.post<string>(`${this.prefix}/refresh`)) as string;
  }
}
