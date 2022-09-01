import { lazy, Suspense } from "react";
import { Context } from "shared-context";
import { ThemeProvider, Button } from "library";
import ErrorBoundary from "./components/ErrorBoundary";

const Welcome = lazy(() => import("media/Welcome"));
const Widget = lazy(() => import("media/Widget"));

export default function App() {
  return (
    <div>
      <h1>Host</h1>
      <div>
        <Context.Provider value={{ app: "host" }}>
          <ErrorBoundary>
            <Suspense fallback="...loading">
              <Welcome />
            </Suspense>
          </ErrorBoundary>
        </Context.Provider>
      </div>
      <div>
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
      </div>
    </div>
  );
}
