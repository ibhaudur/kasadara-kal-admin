import { Provider } from "react-redux";
import AllRoutes from "./routes/index.route";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import "./assets/style.css";
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AllRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
