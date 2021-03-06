import BaseHttpService from "@src/services/BaseHttp.service";
import { API_PREFIX } from "@src/constant/api.constant";
import {
  CheckOverlapEmailDto,
  CheckOverlapNicknameDto,
  ConfirmCertificationDto,
  SendCertificationMailDto,
  SignupForm,
  Univ,
} from "@src/models/dto/signup.dto";

export default class SignupService extends BaseHttpService {
  prefix = API_PREFIX.SIGNUP;

  async findAllUniv(): Promise<Univ[]> {
    return (await this.get<Univ[]>(`${this.prefix}/univ`)) as Univ[];
  }

  async sendCertificationMail(
    param: SendCertificationMailDto,
  ): Promise<boolean> {
    return (await this.post<boolean>(
      `${this.prefix}/certification`,
      param,
    )) as boolean;
  }

  async confirmCertification(param: ConfirmCertificationDto): Promise<string> {
    return (await this.post<string>(
      `${this.prefix}/certification/confirm`,
      param,
    )) as string;
  }

  async checkOverlapEmail(param: CheckOverlapEmailDto): Promise<boolean> {
    return (await this.post<boolean>(
      `${this.prefix}/overlap/email`,
      param,
    )) as boolean;
  }

  async checkOverlapNickname(param: CheckOverlapNicknameDto): Promise<boolean> {
    return (await this.post<boolean>(
      `${this.prefix}/overlap/nickname`,
      param,
    )) as boolean;
  }

  async signupUser(param: SignupForm): Promise<boolean> {
    return (await this.post<boolean>(`${this.prefix}`, param)) as boolean;
  }
}
