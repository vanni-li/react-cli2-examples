import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Users from "./pages/Users";

export default (props) => (
	<Router>
		<Route path="/" exact component={Index} />
		<Route path="/about" exact component={About} />
		<Route path="/users" exact component={Users} />
	</Router>
);