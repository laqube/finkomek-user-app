import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App.jsx";
import "./index.css";
import { LanguageContextProvider } from "./LanguageContext.jsx";
import LanguageProvider from "./LanguageProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <LanguageProvider>
        <LanguageContextProvider>
          <App />
        </LanguageContextProvider>
      </LanguageProvider>
    </BrowserRouter>
  </Provider>
);
