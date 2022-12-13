import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import CardList from "../component/cardList.jsx";


export const Home = () => (
	<div className="text-center mt-5" >
		<h1>Hello Rigo!</h1>
		<ul className="list-group-horizontal d-flex "
		      style={{
				overflowY:"hidden ",
				 overflowX: "scroll",
				  maxWidth:"800px",
				   margin:"auto"}}  >
			<li className="list-group-item" style={{height:"350px"}}>
			<CardList
                id={1}
                type="planets"
                title={1}
                text="A StarWars Planet"
                img={`https://starwars-visualguide.com/assets/img/1/${1}.jpg`}
				
              />
			</li>
			<li className="list-group-item">
			<CardList
                id={1}
                type="planets"
                title={1}
                text="A StarWars Planet"
                img={`https://starwars-visualguide.com/assets/img/1/${1}.jpg`}
              />
			</li>
			<li className="list-group-item">
			<CardList
                id={1}
                type="planets"
                title={1}
                text="A StarWars Planet"
                img={`https://starwars-visualguide.com/assets/img/1/${1}.jpg`}
              />
			</li>
			<li className="list-group-item">
			<CardList
                id={1}
                type="planets"
                title={1}
                text="A StarWars Planet"
                img={`https://starwars-visualguide.com/assets/img/1/${1}.jpg`}
              />
			</li>
			<li className="list-group-item">
			<CardList
                id={1}
                type="planets"
                title={1}
                text="A StarWars Planet"
                img={`https://starwars-visualguide.com/assets/img/1/${1}.jpg`}
              />
			</li>
			
		</ul>
	</div>
);
