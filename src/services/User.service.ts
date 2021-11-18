import BaseHttpService from "@src/services/BaseHttp.service";
import { UserMyPageDto } from "@src/models/dto/user.dto";

export default class UserService extends BaseHttpService {
  prefix = "/user";

  async findUserUniv(): Promise<string> {
    return (await this.get<string>(`${this.prefix}/univ`)) as string;
  }

  async findMyPageProfile(): Promise<UserMyPageDto> {
    return (await this.get<UserMyPageDto>(
      `${this.prefix}/mypage`,
    )) as UserMyPageDto;
  }
}
