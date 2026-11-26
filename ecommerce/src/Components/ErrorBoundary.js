import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Unhandled UI error:', error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div role="alert" className="text-center py-5 px-3">
        <h2 className="fw-bold">Something went wrong</h2>
        <p className="text-muted">Please reload the page and try again.</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>Reload</button>
      </div>
    );
  }
}
