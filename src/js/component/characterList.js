import React, { useState, useEffect, useContext } from "react";
import { useSearchParams} from "react-router-dom";
import CardList from "./cardList.jsx";
import { Context } from "../store/appContext.jsx";
import Pagination from "./pagination.jsx";

  const CharacterList = () => {
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
      <h1>Characters</h1>
      <div className="container">
        <div className="row flex-nowrap ">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterList