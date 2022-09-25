import { observable } from "mobx";

export class Timer {
  @observable secondsPassed = 0;

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }
}

export default new Timer();
