import ReactDOM from "react-dom";
import React from 'react'
import "semantic-ui-css/semantic.min.css";
import { StoreContext, store } from "./app/stores/store";
import { RouterProvider } from "react-router-dom";

import "./app/layout/styles.css";
import { router } from "./app/router/Routes";

ReactDOM.render(
  //  <React.StrictMode>
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>,
  //  </React.StrictMode>,
  document.getElementById("root")
);
