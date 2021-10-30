import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { APIErrorResponse, APIResponse } from "@src/dto/api/api-response";

// MobX store와 함께 사용되므로 class로 생성
export default class BaseHttpService {
  BASE_URL: string = process.env.BASE_URL || "http://localhost:8000";

  _accessToken: string = null;

  async get<T = any>(
    path: string,
    options: AxiosRequestConfig = {},
  ): Promise<T | void> {
    Object.assign(options, this._getCommonOptions());
    return axios
      .get<APIResponse<T>>(`${this.BASE_URL}${path}`, options)
      .then((res: AxiosResponse<APIResponse<T>>) => res.data.data)
      .catch((error: AxiosError<APIErrorResponse>) =>
        this._handleHttpError(error),
      );
  }

  async post<T = any>(
    path: string,
    data: any = {},
    options: AxiosRequestConfig = {},
  ): Promise<T | void> {
    Object.assign(options, this._getCommonOptions());
    return axios
      .post<APIResponse<T>>(`${this.BASE_URL}${path}`, data, options)
      .then((res: AxiosResponse<APIResponse<T>>) => res.data.data)
      .catch((error: AxiosError<APIErrorResponse>) =>
        this._handleHttpError(error),
      );
  }

  async delete<T = any>(
    path: string,
    options: AxiosRequestConfig = {},
  ): Promise<T | void> {
    Object.assign(options, this._getCommonOptions());
    return axios
      .delete<APIResponse<T>>(`${this.BASE_URL}${path}`, options)
      .then((res: AxiosResponse<APIResponse<T>>) => res.data.data)
      .catch((error: AxiosError<APIErrorResponse>) =>
        this._handleHttpError(error),
      );
  }

  async patch<T = any>(
    path: string,
    data: any = {},
    options: AxiosRequestConfig = {},
  ): Promise<T | void> {
    Object.assign(options, this._getCommonOptions());
    return axios
      .patch<APIResponse<T>>(`${this.BASE_URL}${path}`, data, options)
      .then((res: AxiosResponse<APIResponse<T>>) => res.data.data)
      .catch((error: AxiosError<APIErrorResponse>) =>
        this._handleHttpError(error),
      );
  }

  _handleHttpError(error: AxiosError<APIErrorResponse>) {
    if (error?.response?.data) {
      const { statusCode } = error?.response?.data;
      // const requestUrl = error.response?.config.url;

      if (statusCode !== 401) {
        throw error.response.data;
      } else {
        return this._handle401(error);
      }
    } else {
      throw error;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  _handle401(error: AxiosError<APIErrorResponse>) {
    // TODO:: refresh the token
    console.log(error.message);
    // this.get("/api/auth/refresh")
    //   .then(() => axios.request(error.config))
    //   .catch(() => Router.push("/login"));
  }

  _getCommonOptions() {
    const token = this.loadToken();
    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      };
    }
    return { withCredentials: true };
  }

  get accessToken() {
    return this._accessToken ? this._accessToken : this.loadToken();
  }

  _saveToken(accessToken: string) {
    this._accessToken = accessToken;
    return localStorage.setItem("accessToken", accessToken);
  }

  loadToken() {
    const token: string | null = localStorage.getItem("accessToken");
    this._accessToken = token;
    return token;
  }

  removeToken() {
    this._accessToken = null;
    localStorage.removeItem("accessToken");
  }
}
