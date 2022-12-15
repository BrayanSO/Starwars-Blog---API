import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardDetail from "../component/cardDetail.jsx";

import { Context } from "../store/appContext.jsx";
export const SpeciesDetail = () => {
	const {store, actions} = useContext(Context);
	const [data, setData] = useState ({})
	const {speciesid}=useParams();
	useEffect(()=>{
				actions.getStarWarsDetail("species", speciesid).then(resp=>setData(resp))
	},[] )
	return (
		<div className="container flex-row">
		<h1>Species {data.name}</h1>
		<CardDetail
		title={data.name}
		img={`https://starwars-visualguide.com/assets/img/species/${speciesid}.jpg`}
		body={
			<ul>
<li>Average height: {data.average_height}</li>
<li>Average lifespan: {data.average_lifespan}</li>
<li>Classification: {data.classification}</li>
<li>Created: {data.created}</li>
<li>Designation: {data.designation}</li>
<li>Edited: {data.edited}</li>
<li>Eye colors: {data.eye_colors}</li>
<li>Hair colors :{data.hair_colors}</li>
<li>Language: {data.language}</li>


			</ul>
		}
		type="species"
		/>
		</div>
	);
};


