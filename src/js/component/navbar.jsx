import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [links, setLinks]=useState([
    { text:"Characters", link:"/Characters"},
    { text:"Films", link:"/films"},
    { text:"Species", link:"/species"},
    { text:"Starships", link:"/starships"},
    { text:"Vehicles", link:"/Vehicles"},
    { text:"Planets", link:"/planets"}

  ]);
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
                Favorites
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
