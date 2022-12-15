import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardDetail from "../component/cardDetail.jsx";
import { Context } from "../store/appContext.jsx";

export const CharactersDetail = () => {
	const {store, actions} = useContext(Context);
	const [data, setData] = useState ({})
	const peopleid=useParams();
	useEffect(()=>{
		console.log(peopleid.charactersid);
				actions.getStarWarsDetail("people", peopleid.charactersid).then(resp=>setData(resp))
	},[] )
	return (
		<div className="container flex-row">
		<h1>character {data.name}</h1>
		<CardDetail
		title={data.name}
		img={`https://starwars-visualguide.com/assets/img/characters/${peopleid.charactersid}.jpg`}
		body={
			<ul>
 <li>name:{data.name}</li>
<li>birth_year:{data.birth_year}</li>
<li>films:{data.films}</li>
<li>gender:{data.gender}</li>
<li>height:{data.height}</li>
<li>homeworld:{data.homeworld}</li>
			</ul>
		}
		type="characters"
		/>
		</div>
	);
    };