import { observable } from "mobx";

export class Counter {
  @observable count: number = 0;

  increment() {
    this.count++;
  }
  reset() {
    this.count = 0;
  }
}

export default new Counter();
