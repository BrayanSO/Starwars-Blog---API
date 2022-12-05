import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext.jsx";
export const PlanetsDetail = () => {
	const {planetid}=useParams();
	return (
		<div className="container flex-row">
		<h1>Planets</h1>
		<h2>planet #{planetid}</h2>
		</div>
	);
};
