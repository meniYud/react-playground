import React, { Component } from "react";
import { Link } from "react-router-dom";
import oopsImage from "../assets/Oops.png";

export default class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    console.error("ErrorBoundary component caught an error", err, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <img src={oopsImage} className="error-image" />
          <h2>There was an error!</h2>
          <Link to="/">Click here to go back to safety</Link>
        </div>
      );
    }
    return this.props.children;
  }
}
