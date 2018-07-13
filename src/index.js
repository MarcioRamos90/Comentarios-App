import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import base, { auth, providers } from "./base";

ReactDOM.render(
  <App auth={auth} providers={providers} base={base} />,
  document.getElementById("root")
);
registerServiceWorker();
