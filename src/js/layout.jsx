import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Characters } from "./views/characters.jsx";
import { CharactersDetail } from "./views/charactersDetail.jsx";
import { Species } from "./views/species.jsx";
import { Vehicles } from "./views/vehicles.jsx";
import { Planets} from "./views/planets.jsx";
import { PlanetsDetail } from "./views/planetsDetail.jsx";
import { Films } from "./views/films.jsx";
import { FilmsDetail } from "./views/filmsDetail.jsx";
import { Starships } from "./views/starships.jsx";
import { StarshipsDetail } from "./views/starshipsDetail.jsx";
import {CardList} from "./component/cardList.jsx";


import injectContext from "./store/appContext.jsx";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { SpeciesDetail } from "./views/speciesDetail.jsx";

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
						<Route path="/characters" element={<Characters/>} />
						<Route path="/characters/:charactersid" element={<CharactersDetail/>} />
						<Route path="/species" element={<Species/>} />
						<Route path="/species/:speciesid" element={<SpeciesDetail/>} />
						<Route path="/vehicles" element={<Vehicles/>} />
						<Route path="/starships" element={<Starships/>} />
						<Route path="/starships/:starshipsid" element={<StarshipsDetail/>} />
						<Route path="/planets" element={<Planets/>} />
						<Route path="/planets/:planetid" element={<PlanetsDetail/>} />
						<Route path="/films" element={<Films />} />
						<Route path="/films/:filmsid" element={<FilmsDetail/>} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
