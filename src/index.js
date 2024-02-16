import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "../src/context/AuthContext";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </AuthProvider>
);
reportWebVitals();
