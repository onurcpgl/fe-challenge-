import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import "./App.css";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <AppRoute />
        </QueryClientProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
