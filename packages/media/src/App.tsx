import { lazy } from "react";
import { EventServiceProvider, SuspendedErrorBoundary } from "@mf/core";
import { Flex, ThemeProvider } from "@mf/flamingo";
import WelcomeWidget from "./components/WelcomeWidget";
import EventsWidget from "./components/EventsWidget";
import AppLayout from "./components/AppLayout";

// const AppLayout = lazy(() => import("main/AppLayout"));

export default function App() {
  return (
    <EventServiceProvider>
      <ThemeProvider>
        <SuspendedErrorBoundary subject="AppLayout failed">
          <AppLayout title="Media">
            <Flex direction="column">
              <WelcomeWidget project="Media" />
              <EventsWidget className="mt-3" />
            </Flex>
          </AppLayout>
        </SuspendedErrorBoundary>
      </ThemeProvider>
    </EventServiceProvider>
  );
}
