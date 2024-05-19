import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import App from "./App.jsx";
import "./index.css";
import { LanguageContextProvider } from "./LanguageContext.jsx";
import LanguageProvider from "./LanguageProvider.jsx";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <LanguageProvider>
          <LanguageContextProvider>
            <App />
          </LanguageContextProvider>
        </LanguageProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
