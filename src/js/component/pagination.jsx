import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Pagination.css"
const Pagination = (props) => {
    /*
    pages: Cantidad de paginas
    current pages: pagina Actual
    type: -> planet, film, people
     */

    return(
    <nav>
    <ul className="pagination">
      <li className={"page-item" + props.currentPage == 1 ? " disable" : ""}>
        <Link 
        className="page-link"
        to={props.currentPage == 1 ? "#":`/${props.type}?page=${parseInt(props.currentPage)- 1}`}
        >
          Anterior
          </Link>
      </li>
        {Array(props.pages).fill("").map((val, page)=> (
            <li
             key={page}
             className={`page-item${
                props.currentPage == page + 1 ? "active":"" 
        }`}
        >
            <Link className="page-link" to={`/${props.type}?page=${page+1}`}>
                      {page + 1}
              </Link>
              </li>
              ))}
      <li
       className={
        "page-item"+ props.currentPage == props.pages?  "disable":""} >
         <Link 
         className="page-link" 
         to={
          props.currentPage == props.pages 
          ? "#"
          :`/${props.type}?page=${parseInt(props.currentPage) + 1}`}>Siguiente</Link>
      </li>
    </ul>
  </nav>
  );
};
export default Pagination