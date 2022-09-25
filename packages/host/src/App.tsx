import { Component, lazy, Suspense } from "react";
import { inject, observer } from "mobx-react";
import { EventServiceProvider } from "shared-context";
import { ThemeProvider, Button } from "library";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header/Header";
import { StoreProps } from "./store";

const Welcome = lazy(() => import("media/Welcome"));
const Widget = lazy(() => import("media/Widget"));

interface AppProps extends StoreProps<"counter" | "timer"> {}

@inject("counter", "timer")
@observer
class App extends Component<AppProps> {
  interval: number | null;
  componentDidMount(): void {
    this.interval = window.setInterval(() => {
      this.props.timer.increase();
    }, 1000);
  }
  componentWillUnmount(): void {
    window.clearInterval(this.interval);
  }
  handleIncrement = () => {
    this.props.counter?.increment();
  };
  handleReset = () => {
    this.props.counter?.reset();
  };

  render() {
    return (
      <div>
        <h1>Host</h1>
        <div>
          <EventServiceProvider>
            <Header />
            <p>
              <Button onClick={this.handleIncrement}>Increment counter</Button>
              <Button onClick={this.handleReset}>Reset counter</Button>
            </p>
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
}

export default App;
