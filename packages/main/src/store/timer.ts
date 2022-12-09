import { observable } from "mobx";

export class Timer {
  @observable time = Date.now();

  increase() {
    this.time += 1000;
  }
}

export default new Timer();
