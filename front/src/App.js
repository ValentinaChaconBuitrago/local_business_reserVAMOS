import React from "react";
import {BrowserRouter as Router, Switch, Route}from "react-router-dom"


import "./App.css";
import Nav from "./Nav.js";
import Client from "./components/Client.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";


const App = () => {
		return (
			<Router>
				<div className="App">

						<Nav></Nav>
						<Switch>
						<Route path="/" exact component={Client} />
						<Route path="/login" exact component={Login} />
						<Route path="/signup" exact component={Signup}/>
						</Switch>
				</div>
			</Router>
			);
};

export default App;
