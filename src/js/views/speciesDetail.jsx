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
<li>name:{data.name} </li>
<li>average_height{data.average_height}</li>
<li>average_lifespan{data.average_lifespan}</li>
<li>classification{data.classification}</li>
<li>created{data.created}</li>
<li>designation{data.designation}</li>
<li>edited{data.edited}</li>
<li>eye_colors{data.eye_colors}</li>
<li>hair_colors{data.hair_colors}</li>
<li>language{data.language}</li>


			</ul>
		}
		type="species"
		/>
		</div>
	);
};


