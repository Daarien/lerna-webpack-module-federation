import { Component } from "react";
import { inject, observer } from "mobx-react";
import { StoreProps } from "store";
import { Box, Frame } from "@mf/flamingo";

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
      <Frame>
        <Box display="flex" alignItems="center">
          <Box component='span' mr={2}>Time:</Box>
          <Watcher />
        </Box>
      </Frame>
    );
  }
}

function Watch({ timer }: StoreProps<"timer">) {
  return <span>{new Date(timer.time).toLocaleString("ru")}</span>;
}

Watch.defaultProps = {} as StoreProps<"timer">;

const Watcher = inject("timer")(observer(Watch));
