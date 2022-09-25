import { inject, observer, IWrappedComponent } from "mobx-react";
import { useEventService } from "shared-context";
import type { StoreProps } from "../../store";

interface HeaderProps extends StoreProps<"counter" | "timer"> {}

function Header({ counter, timer }: HeaderProps) {
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
      <h1>Header</h1>
      <button onClick={handleClick}>Dispatch events</button>
      <button onClick={handleClickInfo}>Show events events</button>
      <div>
        <h3>Counter</h3>
        <p>Current count: {counter.count}</p>
      </div>
      <div>
        <h3>Timer</h3>
        <p>Current time: {timer.secondsPassed}</p>
      </div>
    </div>
  );
}

Header.defaultProps = {} as StoreProps<"counter" | "timer">;

export default inject("counter", "timer")(observer(Header));
