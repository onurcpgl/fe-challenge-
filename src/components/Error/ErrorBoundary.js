import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Burada hata raporlama, loglama veya başka bir işlem yapabilirsiniz
    console.error("Error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen bg-[#242424] flex justify-center items-center flex-col">
          <p className="text-2xl font-extrabold text-[#c4c2c2]">
            Something is not right...
          </p>

          <p className="max-w-96 text-[#c4c2c2] my-5 text-justify">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </p>
          <a
            href="/"
            className="bg-white px-5 py-2 text-2xl font-semibold rounded hover:scale-105 duration-150 delay-150"
          >
            Go Home
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
