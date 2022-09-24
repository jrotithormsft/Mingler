import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export const msalInstance = new PublicClientApplication(msalConfig);

root.render(
  <StrictMode>
    <Router>
      <App msalInstance={msalInstance} />
    </Router>
  </StrictMode>
);
