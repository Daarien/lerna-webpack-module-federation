import { SuspendedErrorBoundary, Player } from "@mf/core";
import { Flex } from "@mf/flamingo";
import WelcomeWidget from "./components/WelcomeWidget";
import EventsWidget from "./components/EventsWidget";

export default function App() {
  return (
    <Player title="Media">
      <SuspendedErrorBoundary subject="AppLayout failed">
        <Flex direction="column">
          <WelcomeWidget project="Media" />
          <EventsWidget className="mt-3" />
        </Flex>
      </SuspendedErrorBoundary>
    </Player>
  );
}
