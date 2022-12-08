import React, { useState, useEffect, useContext } from "react";
import { useSearchParams} from "react-router-dom";
import CardList from "../component/cardList.jsx";
import { Context } from "../store/appContext.jsx";
import Pagination from "../component/pagination.jsx";

export const Planets = () => {
  const { store, actions } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();
  //const [currentPage, setCurrentPage]= useState();

  useEffect(() => {
    actions.getStarWars("planets");
  }, []);
  return (
    <div className="container">
      <h1>Planets</h1>
      <div className="container">
        <div className="row">
          {store.planets.map((planet) => (
            <div key={planet.uid} className="col col-md-4">
              <CardList
                id={planet.uid}
                type="planets"
                title={planet.name}
                text="A StarWars Planet"
                img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              />
            </div>
          ))}
        </div>
       <div className="row">
		<div className="col">
            <Pagination pages={6} currentPage={searchParams.get("page")||1} 
            type={"planets"} />
          </div>
        </div>
      </div>
    </div>
  );
};
