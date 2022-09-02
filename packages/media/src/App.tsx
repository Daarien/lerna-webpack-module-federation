import { EventServiceProvider } from "shared-context";
import { lazy, Suspense } from "react";
import { ThemeProvider, Flex, Button } from "library";
import Welcome from "./Welcome";
import Widget from "./components/Widget";
import AppLayout from "./components/AppLayout";

// @@ts-expect-error
// const AppLayout = lazy(() => import("host/AppLayout"));

export default function App() {
  return (
    <EventServiceProvider>
      <div>
        <h1>Media</h1>
        <div>
          <Welcome />
        </div>
        <div>
          <ThemeProvider>
            <h4>ThemeProvider</h4>
            <Button>Button</Button>
            <div>
              <Widget />
            </div>
            <Suspense fallback="...loading">
              <AppLayout>
                <h4>ThemeProvider</h4>
                <Button>Button</Button>
                <div>
                  <Widget />
                </div>
              </AppLayout>
            </Suspense>
          </ThemeProvider>
        </div>
        <div>
          <Flex>
            <span>Flex</span>
            <span>Box</span>
          </Flex>
        </div>
      </div>
    </EventServiceProvider>
  );
}
