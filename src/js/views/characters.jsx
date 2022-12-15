import React, { useState, useEffect, useContext } from "react";
import { useSearchParams} from "react-router-dom";
import CardList from "../component/cardList.jsx";
import { Context } from "../store/appContext.jsx";
import Pagination from "../component/pagination.jsx";

export const Characters = () => {
  const { store, actions } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages]=useState (0)
  const [records, setRecords]=useState (0)

  useEffect(() => {
    actions.getStarWars("people").then (resp=>{
      if(resp){
        setPages(resp.pages);
        setRecords(resp.records); 
     }
    });
  }, []);

  useEffect(()=>{
    actions.getStarWars("people",{page:searchParams.get("page")}).then (resp=>{
      if(resp){
        setPages(resp.pages);
        setRecords(resp.records); 
     }
    });
  },[searchParams.get("page")]
  )
  return (
    <div className="container">
      <h1>characters</h1>
      <h5> Total de personajes encontrados {records}</h5>
      <div className="container">
        <div className="row">
          {store.people.map((characters) => (
            <div key={characters.uid} className="col col-md-4">
              <CardList
                id={characters.uid}
                type="people"
                title={characters.name}
                text="A StarWars Characters"
                img={`https://starwars-visualguide.com/assets/img/characters/${characters.uid}.jpg`}
              />
            </div>
          ))}
        </div>
       <div className="row">
		<div className="col">
            <Pagination pages={pages} currentPage={searchParams.get("page") || "1"} 
            type={"characters"} />
          </div>
        </div>
      </div>
    </div>
  );
};
