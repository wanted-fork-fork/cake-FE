import { makeAutoObservable } from "mobx";
import { RootStore } from "@src/store/root.store";

// 스토어 생성 예제, 필요없을 시 삭제
export default class CountStore {
  number: number = 0;

  // eslint-disable-next-line no-unused-vars
  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  increase = () => {
    this.number += 1;
  };

  decrease = () => {
    this.number -= 1;
  };
}
