import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import CartProvider from "./components/CartProvider";
import "./styles/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
