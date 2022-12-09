import { useEventService } from "@mf/core";
import { useEffect } from "react";

export default function Events() {
  const EventService = useEventService();

  function handleClick() {
    EventService.dispatch("watch");
    EventService.dispatch("boom");
  }

  function handleClickInfo() {
    EventService.getInfo();
  }

  useEffect(() => {
    EventService.subscribe("watch", () => {
      console.info("Events ~ watching");
    });
    EventService.subscribe("boom", () => {
      console.warn("Events ~ boom!!!");
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h5>Events</h5>
      <button onClick={handleClick}>Dispatch events</button>
      <button onClick={handleClickInfo}>Show events events</button>
    </div>
  );
}
