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
      if (this.props.fallback) {
        return this.props.fallback;
      }
      const msg =
        typeof this.state.error === "object"
          ? this.state.error.toString()
          : null;
      return (
        <div>
          <h4>{this.props.subject}</h4>
          {/* <span>{msg}</span> */}
        </div>
      );
    }

    return this.props.children;
  }
}
