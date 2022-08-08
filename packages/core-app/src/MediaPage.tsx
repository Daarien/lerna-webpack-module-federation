import { lazy, Suspense } from "react";
import { ErrorBoundary } from "./components";

// @ts-ignore
const Widget = lazy(() => import("media/Widget"));

export default function MediaPage() {
  return (
    <div>
      <h4>Media page heading</h4>
      <ErrorBoundary>
        <Suspense>
          <Widget />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
