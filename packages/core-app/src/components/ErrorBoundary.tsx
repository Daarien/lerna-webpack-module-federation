import { Component } from "react";

export default class ErrorBoundary extends Component<
  any,
  { hasError: boolean; message: string }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: error.toString() };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <p>Something went wrong.</p>
          <p>{this.state.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
