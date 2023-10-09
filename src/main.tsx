import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import { store } from "./store";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
