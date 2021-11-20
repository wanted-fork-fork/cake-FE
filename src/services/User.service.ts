import BaseHttpService from "@src/services/BaseHttp.service";
import { UserMyPageDto } from "@src/models/dto/user.dto";

export default class UserService extends BaseHttpService {
  prefix = "/user";

  async findUserUniv(): Promise<string> {
    return (await this.get<string>(`${this.prefix}/univ`)) as string;
  }

  async findMyPageProfile(id = null): Promise<UserMyPageDto> {
    return (await this.get<UserMyPageDto>(
      `${this.prefix}/mypage${id ? `?id=${id}` : ""}`,
    )) as UserMyPageDto;
  }

  async findMyRemainPoint(): Promise<number> {
    return (await this.get<number>(`${this.prefix}/point`)) as number;
  }
}
