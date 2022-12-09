import { Suspense } from "react";
import ErrorBoundary, { ErrorBoundaryProps } from "./ErrorBoundary";

interface Props extends ErrorBoundaryProps {}

export default function SuspendedErrorBoundary({ subject, children }: Props) {
  return (
    <ErrorBoundary subject={subject}>
      <Suspense fallback="...loading">{children}</Suspense>
    </ErrorBoundary>
  );
}
