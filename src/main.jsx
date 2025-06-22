import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './test1/App'
import App from "./useEffect_with_axios_api/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
