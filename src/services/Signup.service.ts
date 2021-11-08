import BaseHttpService from "@src/services/BaseHttp.service";
import { API_PREFIX } from "@src/constant/api.constant";
import {
  CheckOverlapEmailDto,
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

  async confirmCertification(param: ConfirmCertificationDto): Promise<boolean> {
    return (await this.post<boolean>(
      `${this.prefix}/certification/confirm`,
      param,
    )) as boolean;
  }

  async checkOverlapEmail(param: CheckOverlapEmailDto): Promise<boolean> {
    return (await this.post<boolean>(
      `${this.prefix}/overlap`,
      param,
    )) as boolean;
  }

  async signupUser(param: SignupForm): Promise<boolean> {
    return (await this.post<boolean>(`${this.prefix}`, param)) as boolean;
  }
}
