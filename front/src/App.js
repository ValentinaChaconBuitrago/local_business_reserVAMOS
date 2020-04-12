import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Client from "./components/Client.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Store from "./components/Store.js";
import FormAddStore from "./components/FormAddStore.js";
const apikey = process.env.REACT_APP_GOOGLEAPIKEY;

const App = () => {
	return (
		<Router>
			<div className="App">

				<Switch>
					<Route path="/" exact component={Client} />
					<Route path="/login" exact component={Login} />
					<Route path="/signup" exact component={Signup} />
					<Route path="/formAddStore" exact component={FormAddStore} />
					<Route path={"/store/:_id"} exact component={Store} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
