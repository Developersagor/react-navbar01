import React from "react";
import "./index.css";
import App from "./App";
import reactDom from "react-dom/client";
const root = reactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
