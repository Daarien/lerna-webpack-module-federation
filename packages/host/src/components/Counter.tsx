import { inject, observer } from "mobx-react";
import { useEventService } from "@mf/shared";
import type { StoreProps } from "../store";

interface Props extends StoreProps<"counter"> {}

function Header({ counter }: Props) {
  const EventService = useEventService();

  function handleClick() {
    // @ts-ignore
    EventService.dispatch("boom");
  }

  function handleClickInfo() {
    // @ts-ignore
    EventService.getInfo();
  }

  return (
    <div>
      <button onClick={handleClick}>Dispatch events</button>
      <button onClick={handleClickInfo}>Show events events</button>
      <div>
        <h3>Counter</h3>
        <p>Current count: {counter.count}</p>
      </div>
    </div>
  );
}

Header.defaultProps = {} as StoreProps<"counter">;

export default inject("counter")(observer(Header));
