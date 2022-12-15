import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardDetail from "../component/cardDetail.jsx";

import { Context } from "../store/appContext.jsx";
export const VehiclesDetail = () => {
	const {store, actions} = useContext(Context);
	const [data, setData] = useState ({})
	const {vehiclesid}=useParams();
	useEffect(()=>{
				actions.getStarWarsDetail("vehicles", vehiclesid).then(resp=>setData(resp))
	},[] )
	return (
		<div className="container flex-row">
		<h1>vehicles {data.name}</h1>
		<CardDetail
		title={data.name}
		img={`https://starwars-visualguide.com/assets/img/vehicles/${vehiclesid}.jpg`}
		body={
			<ul>
<li>consumables{data.consumables}</li>
<li>cost_in_credits{data.cost_in_credits}</li>
<li>created{data.created}</li>
<li>crew {data.crew}</li>
<li>manufacturer{data.manufacturer}</li>
<li>max_atmosphering_speed{data.max_atmosphering_speed}</li>
<li>model{data.model}</li>
<li>passengers{data.passengers}</li>
			</ul>
		}
		type="vehicles"
		/>
		</div>
	);
};
