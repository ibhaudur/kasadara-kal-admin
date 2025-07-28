import { Provider } from "react-redux";
import AllRoutes from "./routes/index.route";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import "./assets/style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AllRoutes />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
