import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext.jsx";
export const StarshipsDetail = () => {
	const {starshipsid}=useParams();
	return (
		<div className="container flex-row">
		<h1>Starships</h1>
		<h2>starships #{starshipsid}</h2>
		</div>
	);
};
