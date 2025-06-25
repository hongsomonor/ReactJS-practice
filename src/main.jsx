import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './test1/App'
// import App from "./useEffect_with_axios_api/App";
// import App from "./get_data_from_api/App";
import App from "./getApiData_from_laravel/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
