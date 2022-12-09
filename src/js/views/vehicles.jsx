import React, { useState, useEffect, useContext } from "react";
import { useSearchParams} from "react-router-dom";
import CardList from "../component/cardList.jsx";
import { Context } from "../store/appContext.jsx";
import Pagination from "../component/pagination.jsx";

export const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages]=useState (0)
  const [records, setRecords]=useState (0)

  useEffect(() => {
    actions.getStarWars("vehicles").then (resp=>{
      if(resp){
        setPages(resp.pages);
        setRecords(resp.records); 
     }
    });
  }, []);

  useEffect(()=>{
    actions.getStarWars("vehicles",{page:searchParams.get("page")}).then (resp=>{
      if(resp){
        setPages(resp.pages);
        setRecords(resp.records); 
     }
    });
  },[searchParams.get("page")]
  )
  return (
    <div className="container">
      <h1>vehicles</h1>
      <h5> Total de Naves encontradas {records}</h5>
      <div className="container">
        <div className="row">
          {store.vehicles.map((vehicles) => (
            <div key={vehicles.uid} className="col col-md-4">
              <CardList
                id={vehicles.uid}
                type="vehicles"
                title={vehicles.name}
                text="A StarWars vehicles"
                img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
              />
            </div>
          ))}
        </div>
       <div className="row">
		<div className="col">
            <Pagination pages={pages} currentPage={searchParams.get("page") || "1"} 
            type={"vehicles"} />
          </div>
        </div>
      </div>
    </div>
  );
};
