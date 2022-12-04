import { Component, lazy, Suspense } from "react";
import { Frame } from "library";
import ErrorBoundary from "../components/ErrorBoundary";
import Timer from "../components/Timer";
import Events from "../components/Events";

const Welcome = lazy(() => import("media/Welcome"));
const Widget = lazy(() => import("media/Widget"));

class Main extends Component {
  render() {
    return (
      <div>
        <Timer />

        <hr />

        <Events />

        <hr />

        <ErrorBoundary subject="You're not wellcome">
          <Suspense fallback="...loading">
            <Welcome />
          </Suspense>
        </ErrorBoundary>

        <hr />

        <Frame>
          <ErrorBoundary subject="Widget not responding">
            <Suspense fallback="...loading">
              <Widget />
            </Suspense>
          </ErrorBoundary>
        </Frame>
      </div>
    );
  }
}

export default Main;
