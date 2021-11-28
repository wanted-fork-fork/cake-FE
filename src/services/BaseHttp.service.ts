import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import { APIErrorResponse, APIResponse } from "@src/models/dto/api-response";
import Router from "next/router";
import { API_PREFIX } from "@src/constant/api.constant";

// MobX store와 함께 사용되므로 class로 생성
export default class BaseHttpService {
  axiosInstance: AxiosInstance;

  BASE_URL: string = process.env.BASE_URL;

  _accessToken: string = null;

  _sentRefresh = false;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async get<T>(
    path: string,
    options: AxiosRequestConfig = {},
  ): Promise<T | void> {
    Object.assign(options, this._getCommonOptions());
    return this.axiosInstance
      .get<APIResponse<T>>(`${this.BASE_URL}${path}`, options)
      .then((res: AxiosResponse<APIResponse<T>>) => res.data.data)
      .catch((error: AxiosError<APIErrorResponse>) =>
        this._handleHttpError<T>(error),
      );
  }

  async post<T>(
    path: string,
    data = {},
    options: AxiosRequestConfig = {},
  ): Promise<T | void> {
    Object.assign(options, this._getCommonOptions());
    return this.axiosInstance
      .post<APIResponse<T>>(`${this.BASE_URL}${path}`, data, options)
      .then((res: AxiosResponse<APIResponse<T>>) => res.data.data)
      .catch((error: AxiosError<APIErrorResponse>) =>
        this._handleHttpError<T>(error),
      );
  }

  async delete<T>(
    path: string,
    options: AxiosRequestConfig = {},
  ): Promise<T | void> {
    Object.assign(options, this._getCommonOptions());
    return this.axiosInstance
      .delete<APIResponse<T>>(`${this.BASE_URL}${path}`, options)
      .then((res: AxiosResponse<APIResponse<T>>) => res.data.data)
      .catch((error: AxiosError<APIErrorResponse>) =>
        this._handleHttpError<T>(error),
      );
  }

  async patch<T>(
    path: string,
    data = {},
    options: AxiosRequestConfig = {},
  ): Promise<T | void> {
    Object.assign(options, this._getCommonOptions());
    return this.axiosInstance
      .patch<APIResponse<T>>(`${this.BASE_URL}${path}`, data, options)
      .then((res: AxiosResponse<APIResponse<T>>) => res.data.data)
      .catch((error: AxiosError<APIErrorResponse>) =>
        this._handleHttpError<T>(error),
      );
  }

  async postFile<T>(path: string, file: File): Promise<T | void> {
    const form = new FormData();
    form.set("file", file);
    return this.axiosInstance
      .post<APIResponse<T>>(
        `${this.BASE_URL}${path}`,
        form,
        this._getCommonOptions(),
      )
      .then((res: AxiosResponse<APIResponse<T>>) => res.data.data)
      .catch((error: AxiosError<APIErrorResponse>) =>
        this._handleHttpError<T>(error),
      );
  }

  _handleHttpError<T>(error: AxiosError<APIErrorResponse>) {
    if (error?.response?.data) {
      const { status } = error?.response?.data;
      if (status !== 401) {
        throw error.response.data;
      } else {
        return this._handle401<T>(error);
      }
    } else {
      throw error;
    }
  }

  _handle401<T>(error: AxiosError<APIErrorResponse>): Promise<T | void> | null {
    this.removeToken();

    // refresh token
    if (!this._sentRefresh) {
      this._sentRefresh = true;
      return this.post<string>(`${API_PREFIX.AUTH}/refresh`)
        .then((res: string) => {
          this._saveToken(res);

          // request again
          const { config } = error;
          config.headers = this._getCommonOptions()
            .headers as AxiosRequestHeaders;
          return this.axiosInstance.request(config);
        })
        .then((res: AxiosResponse<APIResponse<T>>) => {
          console.log("hi! ", res.data.data);
          return res.data.data;
        })
        .catch(() => {
          this.removeToken();
          Router.push("/login");
        })
        .finally(() => {
          this._sentRefresh = false;
        });
    }
    return null;
  }

  _getCommonOptions(): AxiosRequestConfig {
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
    return localStorage?.setItem("accessToken", accessToken);
  }

  loadToken() {
    if (typeof window === "undefined") return null;
    const token: string | null = localStorage?.getItem("accessToken");
    this._accessToken = token;
    return token;
  }

  removeToken() {
    this._accessToken = null;
    localStorage?.removeItem("accessToken");
  }
}
