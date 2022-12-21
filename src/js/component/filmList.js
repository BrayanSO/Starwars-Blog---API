import React, { useState, useEffect, useContext } from "react";
import CardList from "../component/cardList.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export const FilmsList = () => {
  const { store, actions } = useContext(Context);
  useEffect(()=> {
  actions.getStarWars("films")
},[]);

  return (
    <div className="container">
      <h1>Films</h1>
      <div className="container">
        <div className="row flex-nowrap">
          {store.films.map((film) => (
            <div key={film.uid} className="col col-md-4">
               <CardList
        id={film.uid}
        type="films"   
        title={film.properties.title}
        text={film.description}
        img={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
         />
            </div>
        ))}
        </div>
      </div>
      <ul>
      </ul>
    </div>
  );
};
