import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import CardList from "../component/cardList.jsx";
import { Context } from "../store/appContext.jsx";

export const Planets = () => {
	const {store, actions}= useContext (Context);
	useEffect(()=> {
		actions.getStarWars("planets")
	  },[]);
	return (
		<div className="container">
		<h1>Planets</h1>
		<div className="container">
			<div className="row">			
			{store.planets.map((planet) => (
			<div className="col col-md-4">
				<CardList
				id={planet.id}
				type="planets"
				title={planet.name}
				text= "A StarWars Planet"
				img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
				/>
				</div>
				))}
			</div>
		  </div>
		</div>
	);
};
