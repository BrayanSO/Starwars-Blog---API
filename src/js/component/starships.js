import React, { useState, useEffect, useContext } from "react";
import { useSearchParams} from "react-router-dom";
import CardList from "../component/cardList.jsx";
import { Context } from "../store/appContext.jsx";
import Pagination from "../component/pagination.jsx";

export const StarshipsList = () => {
  const { store, actions } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages]=useState (0)
  const [records, setRecords]=useState (0)

  useEffect(() => {
    actions.getStarWars("starships").then (resp=>{
      if(resp){
        setPages(resp.pages);
        setRecords(resp.records); 
     }
    });
  }, []);

  useEffect(()=>{
    actions.getStarWars("starships",{page:searchParams.get("page")}).then (resp=>{
      if(resp){
        setPages(resp.pages);
        setRecords(resp.records); 
     }
    });
  },[searchParams.get("page")]
  )
  return (
    <div className="container">
      <h1>starships</h1>
      <div className="container">
        <div className="row flex-nowrap">
          {store.starships.map((starships) => (
            <div key={starships.uid} className="col col-md-4">
              <CardList
                id={starships.uid}
                type="starships"
                title={starships.name}
                text="A StarWars starships"
                img={`https://starwars-visualguide.com/assets/img/starships/${starships.uid}.jpg`}
              />
            </div>
          ))}
        </div>
       <div className="row">
		<div className="col">
          </div>
        </div>
      </div>
    </div>
  );
};
