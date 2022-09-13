import { useEffect } from "react";
import { useEventService } from "shared-context";

export default function Welcome() {
  const EventService = useEventService();

  useEffect(() => {
    const unsubscribe = EventService.subscribe("boom", () => {
      console.error("Boom!!!");
    });

    setTimeout(() => {
      unsubscribe();
    }, 5000);
  }, []);

  return <p>This app is Welcome</p>;
}
