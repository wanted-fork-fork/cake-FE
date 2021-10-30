import BaseHttpService from "@src/services/BaseHttp.service";
import Router from "next/router";

export default class AuthService extends BaseHttpService {
  async login(): Promise<boolean> {
    return Router.push(`${this.BASE_URL}/`);
  }

  logout() {
    this.removeToken();
  }
}
