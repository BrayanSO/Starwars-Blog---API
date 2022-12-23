import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

const CardList=(props) => {
    /* props:
    id
    type   -> planets , fil, . pople 
    title
    img
    */
    const {store, actions} = useContext (Context)

   function imgError(e){
    console.log("Error:" + e.target.src);
    e.target.src = "https://cdn.dribbble.com/users/490588/screenshots/3329226/star_wars_404.png";
   }
   function handleFavorites (data) {
    let favoriteIndex=store.favorites.findIndex(
      (fav)=>fav.link==data.link)
    if(favoriteIndex==-1){
      actions.addFavorites(data);
    } else {  
        actions.removeFavorites(favoriteIndex);
     }
    }
    return(
        <div className="card">
  <img src={props.img} className="card-img-top" alt={props.type.toUpperCase() + " " + props.title}
    onError={imgError}
  />
  <div className="card-body ">
    <h5 className="card-title text-secondary">{props.title}</h5>
    <p className="card-text">{props.text}
    </p>
    <Link to={`/${props.type}/${props.id}`} className="btn btn-dark">
        Ver Detalles
        </Link>
        <button onClick={()=>handleFavorites({ 
            name: props.title,
            link:`/${props.type}/${props.id}`,
        })}
        
        className="btn btn-outline-secondary"><i className="bi bi-suit-heart"></i></button>
  </div>
</div>
    )
}
export default CardList