import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import "./App.css";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <AppRoute />
          </Provider>
        </QueryClientProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
