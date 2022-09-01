import { lazy, Suspense } from "react";
import { Context } from "shared-context";
import ErrorBoundary from "./components/ErrorBoundary";

const Welcome = lazy(() => import("media/Welcome"));

export default function App() {
  return (
    <div>
      <h1>Host</h1>
      <Context.Provider value={{ app: "host" }}>
        <ErrorBoundary>
          <Suspense fallback="...loading">
            <Welcome />
          </Suspense>
        </ErrorBoundary>
      </Context.Provider>
    </div>
  );
}
