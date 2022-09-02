import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      const msg =
        typeof this.state.error === "object"
          ? this.state.error.toString()
          : null;
      return (
        <div>
          <h4>Something went wrong.</h4>
          <span>{msg}</span>
        </div>
      );
    }

    return this.props.children;
  }
}
