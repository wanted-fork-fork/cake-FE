import BaseHttpService from "@src/services/BaseHttp.service";
import { SearchPlaceDto } from "@src/models/dto/map.dto";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { APIErrorResponse } from "@src/models/dto/api-response";

const commonOptions: AxiosRequestConfig = {
  headers: {
    Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}`,
  },
};
export default class MapService extends BaseHttpService {
  BASE_URL = "https://dapi.kakao.com/v2/local";

  CAFE_CATEGORY_CODE = "CE7";

  async get<T>(
    path: string,
    options: AxiosRequestConfig = {},
  ): Promise<T | void> {
    Object.assign(options, commonOptions);
    return this.axiosInstance
      .get<T>(`${this.BASE_URL}${path}`, options)
      .then((res: AxiosResponse<T>) => res.data)
      .catch((error: AxiosError<APIErrorResponse>) =>
        this._handleHttpError(error),
      );
  }

  // 학교명 => 좌표로 변환
  async searchWithKeyword(keyword): Promise<SearchPlaceDto> {
    return (await this.get(
      `/search/keyword.json?query=${keyword}&category_group_code=SC4`,
      {},
    )) as SearchPlaceDto;
  }

  // 좌표 주변 카페 목록 가져오기 => 카테고리로 장소 검색하기
  async searchWithCategories(x, y): Promise<SearchPlaceDto> {
    return (await this.get(
      `/search/category.json?category_group_code=${
        this.CAFE_CATEGORY_CODE
      }&x=${x}&y=${y}&radius=${15000}`,
    )) as SearchPlaceDto;
  }
}
