import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// css and styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";

// Routes
import Home from "./view/Home";
import LoginRegister from "./view/LoginRegister";
import Game from "./view/Game";
import Instructions from "./view/Instructions";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <div id="body">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginRegister} />
          <Route path="/game" component={Game} />
          <Route path="/instructions" component={Instructions} />
        </div>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
