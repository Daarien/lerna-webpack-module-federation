import { useEffect } from "react";
import { EventService } from "@mf/core";
import { Box } from '@mf/flamingo';

export default function EventsWatcher() {

  useEffect(() => {
    EventService.subscribe("boom", () => {
      console.warn("EventsWatcher ~ boom!!!");
    });
  }, []);

  return (
    <Box p={1}>
      <h3>EventsWatcher</h3>
    </Box>
  );
}
