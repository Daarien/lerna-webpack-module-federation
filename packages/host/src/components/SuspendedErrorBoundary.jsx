import { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

export default function SuspendedErrorBoundary({
  children,
  fallback = "...loading",
}) {
  return (
    <ErrorBoundary>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}
