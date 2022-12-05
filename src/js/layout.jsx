import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Naves } from "./views/naves.jsx";
import { Films } from "./views/films.jsx";
import { Planets} from "./views/planets.jsx";
import { PlanetsDetail } from "./views/planetsDetail.jsx";


import injectContext from "./store/appContext.jsx";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/naves" element={<Naves />} />
						<Route path="/films" element={<Films />} />
						<Route path="/planets" element={<Planets/>} />
						<Route path="/planets/:planetid" element={<PlanetsDetail/>} />
						<Route path="/films/:theid" element={<Films/>} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
