import { Component } from "react";
import { inject, observer } from "mobx-react";
import { StoreProps } from "store";

interface TimerProps extends StoreProps<"timer"> {}

@inject("timer")
@observer
export default class Timer extends Component<TimerProps> {
  static defaultProps = {} as StoreProps<"timer">;

  interval: number | null;
  componentDidMount(): void {
    this.interval = window.setInterval(() => {
      this.props.timer.increase();
    }, 1000);
  }
  componentWillUnmount(): void {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h5>Timer</h5>
        <p>{this.props.timer.secondsPassed}</p>
      </div>
    );
  }
}
