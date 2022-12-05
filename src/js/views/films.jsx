import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export const Films = () => {
	const {store, actions}= useContext (Context);
	return (
		<div className="container flex-row">
		<h1>Films</h1>
		<button className="btn btn-dark" onClick={() => actions.getFilms()}> cargar Peliculas</button>
		<ul>
			{store.films.map((films)=><li>{films.title}</li>)}
		</ul> 
		</div>
	);
};