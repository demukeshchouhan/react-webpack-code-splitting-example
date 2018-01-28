import React from "react"
import { render } from "react-dom"
import App from "./Components/App"
import "./style.css"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Loadable from "react-loadable"
import Loading from "./Components/Loading";

const LoadAboutComp = Loadable({
	loader: () => import("./Components/About"),
	loading: Loading
});

const LoadTopicComp = Loadable({
	loader: () => import("./Components/Topic"),
	loading: Loading
});




const Routes = () => (
	<Router>
		<div>
			<nav>
			<ul className="nav">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/topics">Topics</Link></li>
			</ul>
			</nav>

			<hr/>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/about" component={LoadAboutComp} />
				<Route exact path="/topics" component={LoadTopicComp} />
				<Route component={App} />
			</Switch>
		</div>
	</Router>
)


render(<Routes />, document.getElementById("root"));