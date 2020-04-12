import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Nav from "./Nav.js";
import Client from "./components/Client.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Store from "./components/Store.js";
const apikey = process.env.REACT_APP_GOOGLEAPIKEY;

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Client} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path={"/store/:_id"} exact component={Store} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
