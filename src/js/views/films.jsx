import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

export const Films = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container flex-row">
      <h1>Films</h1>
      <button
        className="btn btn-dark"
        onClick={() => actions.getStarWars("films")}
      >
        cargar peliculas
      </button>
      <ul>
        {store.films.map((film) => (
          <li>{film.properties.title}</li>
        ))}
      </ul>
    </div>
  );
};
