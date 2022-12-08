import React from "react";
import { Link } from "react-router-dom";
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
        <a className="page-link">Previous</a>
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
        "page-item"+ props.currentPage == props.pages? "disable":""
    }
    >
        <a className="page-link" href="#">
        Next
        </a>
      </li>
    </ul>
  </nav>
  );
};
export default Pagination