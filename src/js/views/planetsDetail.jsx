import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardDetail from "../component/cardDetail.jsx";

import { Context } from "../store/appContext.jsx";
export const PlanetsDetail = () => {
	const {store, actions} = useContext(Context);
	const {planetid}=useParams();
	useEffect(()=>{

	},[] )
	return (
		<div className="container flex-row">
		<h1>Planets</h1>
		<h2>planet #{planetid}</h2>
		<CardDetail
		title=""
		img=""
		body=""
		type="planet"
		/>
		</div>
	);
};
