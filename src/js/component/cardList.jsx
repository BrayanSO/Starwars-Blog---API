import React from "react";
import { Link } from "react-router-dom";

const CardList=(props) => {
    /* props:
    id
    type   -> planets , fil, . pople 
    title
    img
    */
    return(
        <div class="card">
  <img src={props.img} class="card-img-top" alt={props.type.toUpperCase() + " " + props.title}/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}
    </p>
    <Link to={`/${props.type}/${props.id}`} class="btn btn-dark">
        Ver Detalles
        </Link>
  </div>
</div>
    )
}
export default CardList