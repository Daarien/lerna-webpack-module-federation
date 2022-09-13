import { useEventService } from "shared-context";

export default function Header() {
  const EventService = useEventService();

  function handleClick() {
    EventService.dispatch("boom");
  }

  function handleClickInfo() {
    EventService.getInfo();
  }

  return (
    <div>
      <h1>Header</h1>
      <button onClick={handleClick}>Dispatch events</button>
      <button onClick={handleClickInfo}>Show events events</button>
    </div>
  );
}
