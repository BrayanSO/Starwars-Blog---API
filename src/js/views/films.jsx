import React, { useState, useEffect, useContext } from "react";
import CardList from "../component/cardList.jsx";
import { Link } from "react-router-dom";


import { Context } from "../store/appContext.jsx";

export const Films = () => {
  const { store, actions } = useContext(Context);
  useEffect(()=>actions.getStarWars("films"),[])

  return (
    <div className="container flex-row">
      <h1>Films</h1>
      <div className="container">
        <div className="row">
          {store.films.map((film) => (
        <CardList
        id={film.uid}
        type="films"   
        title={film.properties.title}
        text={film.description}
        img={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
         />
        ))}
        </div>

      </div>
      <ul>
       
       
      </ul>
    </div>
  );
};
