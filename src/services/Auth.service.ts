import BaseHttpService from "@src/services/BaseHttp.service";
import { LoginDto } from "@src/models/dto/user.dto";

export default class AuthService extends BaseHttpService {
  async login(loginDto: LoginDto): Promise<string> {
    return (await this.post<string>("/login", loginDto)) as string;
  }

  logout() {
    this.removeToken();
  }

  async test(): Promise<string> {
    return (await this.get<string>("/test")) as string;
  }

  async refresh(): Promise<string> {
    return (await this.post<string>("/refresh")) as string;
  }
}
