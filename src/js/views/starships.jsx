import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import CardList from "../component/cardList.jsx";
import { Context } from "../store/appContext.jsx";

export const Starships = () => {
	const {store, actions}= useContext (Context);
	useEffect(()=> {
		actions.getStarWars("starships")
	  },[]);
	return (
		<div className="container">
		<h1>Starships</h1>
		<div className="container">
			<div className="row">			
			{store.starships.map((starships) => (
			<div key={starships.uid} className="col col-md-4">
				<CardList
				id={starships.uid}
				type="starships"
				title={starships.name}
				text= "StarWars Ships"
				img={`https://starwars-visualguide.com/assets/img/starships/${starships.uid}.jpg`}
				/>
				</div>
				))}
			</div>
		  </div>
		</div>
	);
};
``