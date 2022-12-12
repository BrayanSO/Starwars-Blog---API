import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardDetail from "../component/cardDetail.jsx";

import { Context } from "../store/appContext.jsx";
export const PlanetsDetail = () => {
	const {store, actions} = useContext(Context);
	const [data, setData] = useState ({})
	const {planetid}=useParams();
	useEffect(()=>{
				actions.getStarWarsDetail("planets", planetid).then(resp=>setData(resp))
	},[] )
	return (
		<div className="container flex-row">
		<h1>Planet {data.name}</h1>
		<CardDetail
		title={data.name}
		img={`https://starwars-visualguide.com/assets/img/planets/${planetid}.jpg`}
		body={
			<ul>
<li>diameter: {data.diameter} </li>
<li>rotation_period {data.rotation_period} </li>
<li>orbital_period {data.orbital_period}</li>
<li>gravity {data.gravity}</li>
<li>population {data.population}</li>
<li>climate {data.climate}</li>
<li>terrain {data.terrain}</li>
<li>created {data.created}</li>
<li>surface_water {data.surface_water}</li>
			</ul>
		}
		type="planet"
		/>
		</div>
	);
};
