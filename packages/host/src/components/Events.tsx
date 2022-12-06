import { Component } from "react";
import { inject, observer } from "mobx-react";
import { EventServiceProvider } from "@mf/shared";
import { Button } from "@mf/flamingo";
import type { StoreProps } from "store";

interface Props extends StoreProps<"counter"> {}

@inject("counter")
@observer
export default class Events extends Component<Props> {
  static defaultProps = {} as StoreProps<"counter">;

  handleIncrement = () => {
    this.props.counter?.increment();
  };
  handleReset = () => {
    this.props.counter?.reset();
  };

  render() {
    return (
      <EventServiceProvider>
        <p>
          <Button onClick={this.handleIncrement}>Increment counter</Button>
          <Button onClick={this.handleReset}>Reset counter</Button>
        </p>
      </EventServiceProvider>
    );
  }
}
