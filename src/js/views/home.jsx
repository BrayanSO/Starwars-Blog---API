import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import CardList from "../component/cardList.jsx";
import CharacterList from "../component/characterList.js";
import PlanetsList from "../component/planetList";
import { FilmsList } from "../component/filmList";
import { SpeciesList } from "../component/speciesList";
import { StarshipsList } from "../component/starships";
import { VehiclesList } from "../component/vehicles";


export const Home = () => (
	<div className="scroller text-center mt-5" >
  <div style={{overflowY:"hidden ", overflowX: "scroll",  maxWidth:"800px", margin:"auto" }}>
      <CharacterList/>
    </div>
    <div style={{overflowY:"hidden ", overflowX: "scroll",  maxWidth:"800px",  margin:"auto"}}>
      <FilmsList/>
    </div>
    <div style={{overflowY:"hidden ", overflowX: "scroll",  maxWidth:"800px",  margin:"auto"}}>
      <SpeciesList/>
    </div>
    <div style={{overflowY:"hidden ", overflowX: "scroll",  maxWidth:"800px",  margin:"auto"}}>
      <StarshipsList/>
    </div>
    <div style={{overflowY:"hidden ", overflowX: "scroll",  maxWidth:"800px",  margin:"auto"}}>
      <VehiclesList/>
    </div>
    <div  style={{overflowY:"hidden ", overflowX: "scroll",  maxWidth:"800px",  margin:"auto"}}>
      <PlanetsList/>
    </div>
    
	</div>
);
