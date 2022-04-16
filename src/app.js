import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";

// Routes
import Home from "./view/Home";
import LoginRegister from "./view/LoginRegister";
import Game from "./view/Game";
import Instructions from "./view/Instructions";
import Missions from "./view/Missions";
import Bosses from "./view/Bosses";
import { useDispatch } from "react-redux";
import { GetMissions } from "./redux/MissionsStore/Actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetMissions());
  }, []);

  return (
    <div id="body">
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginRegister} />
      <Route path="/game" component={Game} />
      <Route path="/instructions" component={Instructions} />
      <Route path="/missions" component={Missions} />
      <Route path="/bosses" component={Bosses} />
    </div>
  );
}

export default App;
