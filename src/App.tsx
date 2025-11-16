import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import AllRoutes from "./routes/index.route";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import "./assets/style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

function App() {
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      setIsAllowed(window.innerWidth >= 1024);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (!isAllowed) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
          fontSize: "20px",
        }}
      >
        This application is not available on mobile or small devices.  
        Please switch to a larger screen (above 1024px width).
      </div>
    );
  }

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
