import { Component, lazy } from "react";
import { Box, Frame } from "@mf/flamingo";
import { EventServiceProvider, SuspendedErrorBoundary } from "@mf/core";
import Events from "components/Events";

const WelcomeWidget = lazy(() => import("media/WelcomeWidget"));
const EventsWidget = lazy(() => import("media/EventsWidget"));
const DirectEvents = lazy(() => import("media/DirectEvents"));
// const EventsWatcher = lazy(() => import("../../../shared/src/EventsWatcher"));
const EventsWatcher = lazy(() => import("shared/EventsWatcher"));

class Main extends Component {
  render() {
    return (
      <EventServiceProvider>
        <div>
          <section>
            <SuspendedErrorBoundary subject="You're not wellcome">
              <WelcomeWidget project="Main" />
            </SuspendedErrorBoundary>
          </section>

          <Box mt={3}>
            <SuspendedErrorBoundary subject="EventsWidget failed!">
              <EventsWidget />
            </SuspendedErrorBoundary>
          </Box>

          <Box mt={3}>
            <SuspendedErrorBoundary subject="DirectEvents failed!">
              <DirectEvents />
            </SuspendedErrorBoundary>
          </Box>

          <section>
            <Frame mt={3}>
              <Events />
            </Frame>
          </section>

          <section>
           <Frame mt={3}>
             <SuspendedErrorBoundary subject="EventsWatcher failed">
               <EventsWatcher />
             </SuspendedErrorBoundary>
           </Frame>
          </section>
        </div>
      </EventServiceProvider>
    );
  }
}

export default Main;
