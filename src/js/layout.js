import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { DetailsCharacters } from "./views/detailscharacters";
import { DetailsPlanets } from "./views/detailsplanets";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div
			className="bg-dark"
			style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/detailscharacters/:id" component={DetailsCharacters} />
						<Route exact path="/detailsplanets/:id" component={DetailsPlanets} />
						<Route exact path="/home">
							<Home />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
