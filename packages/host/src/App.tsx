import { lazy, Suspense } from "react";
import { EventServiceProvider } from "shared-context";
import { ThemeProvider, Button } from "library";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header/Header";

const Welcome = lazy(() => import("media/Welcome"));
const Widget = lazy(() => import("media/Widget"));

interface Props {
  onMount: Fn;
}

export default function App() {
  return (
    <div>
      <h1>Host</h1>
      <div>
        <EventServiceProvider>
          <Header />
          <hr />
          <div>
            <ErrorBoundary>
              <Suspense fallback="...loading">
                <Welcome />
              </Suspense>
            </ErrorBoundary>
          </div>
          <ThemeProvider>
            <h3> ThemeProvider</h3>
            <div>
              <Button>Button from library</Button>
            </div>
            <div>
              <ErrorBoundary>
                <Suspense fallback="...loading">
                  <Widget />
                </Suspense>
              </ErrorBoundary>
            </div>
          </ThemeProvider>
        </EventServiceProvider>
      </div>
    </div>
  );
}
