import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

export const Planets = () => {
	const {store, actions}= useContext (Context);
	return (
		<div className="container flex-row">
		<h1>Planets</h1>
		<ul>
			{store.planets.map((planet)=><li>{planet.name}</li>)}
		</ul>
		</div>
	);
};
