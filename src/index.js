import React, { Suspense } from "react";
import "./index.css";
import App from "./App";
import Loading from "./components/loading";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

require("./i18n");

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
