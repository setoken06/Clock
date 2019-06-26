import React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}

ReactDOM.render(<App />, document.getElementById("root"));
