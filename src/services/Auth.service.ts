import BaseHttpService from "@src/services/BaseHttp.service";
import { LoginDto } from "@src/models/dto/user.dto";

export default class AuthService extends BaseHttpService {
  async login(loginDto: LoginDto): Promise<string> {
    return (await this.post<string>("/login", loginDto)) as string;
  }

  logout() {
    this.removeToken();
  }
}
