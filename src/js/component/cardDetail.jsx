import React from "react";
import { Link } from "react-router-dom";
const CardDetail=(props)=> {
      /*
    props
        title: el titulo de la tarjeta
        img: la direccion de la imagen
        body: texto que se muestra en la tareta
        type: tipo de recuerso que se muestra,
    */
   function imgError(e){
    console.error("error al cargar la Imagen" + e.target.src )
    e.target.src = "https://cdn.dribbble.com/users/490588/screenshots/3329226/star_wars_404.png";
   }
     return(
        <div className="card mb-3" style={{maxwidth: "540px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.img} className="img-fluid rounded-start" alt="..." onError={(imgError)}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <span className="card-text">{props.body}</span>
              <Link to={-1} className="btn btn-primary">Atras</Link>
            </div>
          </div>
        </div>
      </div>
     )
}

export default CardDetail