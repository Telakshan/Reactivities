import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./app/layout/App";
import { StoreContext, store } from "./app/stores/store";

import "./app/layout/styles.css";

ReactDOM.render(
   <React.StrictMode>
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
   </React.StrictMode>,
  document.getElementById("root")
);
