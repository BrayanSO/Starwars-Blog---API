import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext.jsx";
export const FilmsDetail = () => {
	const {filmsid}=useParams();
	return (
		<div className="container flex-row">
		<h1>Films</h1>
		<h2>Films #{filmsid}</h2>
		</div>
	);
};
