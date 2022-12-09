import React, { useState, useEffect, useContext } from "react";
import { useSearchParams} from "react-router-dom";
import CardList from "../component/cardList.jsx";
import { Context } from "../store/appContext.jsx";
import Pagination from "../component/pagination.jsx";

export const Planets = () => {
  const { store, actions } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages]=useState (0)
  const [records, setRecords]=useState (0)

  useEffect(() => {
    actions.getStarWars("planets").then (resp=>{
      if(resp){
        setPages(resp.pages);
        setRecords(resp.records); 
     }
    });
  }, []);

  useEffect(()=>{
    actions.getStarWars("planets",{page:searchParams.get("page")}).then (resp=>{
      if(resp){
        setPages(resp.pages);
        setRecords(resp.records); 
     }
    });
  },[searchParams.get("page")]
  )
  return (
    <div className="container">
      <h1>Planets</h1>
      <h5> Total de planetas encontrados {records}</h5>
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
            <Pagination pages={pages} currentPage={searchParams.get("page") || "1"} 
            type={"planets"} />
          </div>
        </div>
      </div>
    </div>
  );
};
