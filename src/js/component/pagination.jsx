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
    <ul classNmae="pagination">
      <li className={"page-item" + props.currenPage == 1 ? " disable" : ""}>
        <a className="page-link">Previous</a>
      </li>
        {Array(props.pages).map((val, page)=> (
            <li
             className={`page-item${
                props.currenPage == page + 1 ? "active":"" 
        }`}
        >
            <Link className="page-link" to={`/${type}?page=${page+1}`}>
                      ${page + 1}
              </Link>
              </li>
              ))}
    
      <li class={"page-item"+ props.currenPage==props.pages? "disable":""
    }
    >
        <a class="page-link" href="#">
        Next
        </a>
      </li>
    </ul>
      </nav>
  )
  
}
export default Pagination