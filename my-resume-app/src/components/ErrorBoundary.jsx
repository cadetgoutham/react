import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Unhandled UI error:', error, info);
  }

  handleReset = () => {
    try {
      localStorage.removeItem('resume-app-state');
    } catch {
      // ignore
    }
    window.location.assign('/');
  };

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div role="alert" className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Something went wrong</h1>
        <p className="text-gray-600">An unexpected error occurred. You can reload the page, or reset saved data if the problem persists.</p>
        <div className="flex gap-3">
          <button className="btn-primary" onClick={() => window.location.reload()}>Reload</button>
          <button className="btn-secondary" onClick={this.handleReset}>Reset data</button>
        </div>
      </div>
    );
  }
}
