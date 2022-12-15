import React, { useState, useContext  } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export const Navbar = () => {
  const [links, setLinks]=useState([
    { text:"Characters", link:"/characters"},
    { text:"Films", link:"/films"},
    { text:"Species", link:"/species"},
    { text:"Starships", link:"/starships"},
    { text:"Vehicles", link:"/Vehicles"},
    { text:"Planets", link:"/planets"}
]); 
const [favorites, setFavorites]= useState("")

function removeFavorites(index){
  let favorites= [...favorites]
  newFavorites.splice(index,-1)
  setFavorites(newFavorites)
}

  const {store, actions} = useContext(Context);
  return (
    <nav className="navbar navbar-light navbar-expand-md bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" >
          StarWars
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
           { links.map((link, index) => (
              <li key={index} className="nav-item">
                <Link className="nav-link" to={link.link}>{link.text}</Link>
              </li>
            ))}
            <li className="nav-item dropdown ml-auto">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites {store.favorites.length}
              </a>
              <ul className="dropdown-menu">
                { store.favorites.map((item, index) => (
              <li key={index} className="dropdown-item">
                <Link to={item.link}>{item.name}</Link>
                <button onClick={()=>removeFavorites(index)}> <i className="bi bi-trash3-fill"></i></button>
              </li>
            ))}
            {store.favorites<=0? <li className="dropdown-item"> Sin favoritos </li> : null}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
