import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import reducer, { initialState } from "./Components/Reducer.jsx";
import { StateProvider } from "./Components/StateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root"))
.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>
  // document.getElementById("root")
);

