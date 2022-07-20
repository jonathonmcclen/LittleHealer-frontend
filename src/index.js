import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./devices.min.css";

// css and styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux";

import App from "./app";
import TopBar from "./assets/img/PhoneTopBar.jpg";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div class="marvel-device iphone-x">
          <div class="notch">
            <div class="camera"></div>
            <div class="speaker"></div>
          </div>
          <div class="top-bar"></div>
          <div class="sleep"></div>
          <div class="bottom-bar"></div>
          <div class="volume"></div>
          <div class="overflow">
            <div class="shadow shadow--tr"></div>
            <div class="shadow shadow--tl"></div>
            <div class="shadow shadow--br"></div>
            <div class="shadow shadow--bl"></div>
          </div>
          <div class="inner-shadow"></div>
          <div class="screen" style={{ overflow: "scroll" }}>
            <img
              src={TopBar}
              height="48px"
            style={{ position: "sticky", zIndex: "-0", top: "-1 px" }}
            />
            <App />
          </div>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
