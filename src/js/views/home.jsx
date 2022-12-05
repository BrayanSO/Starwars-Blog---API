import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<Link to="home" className="btn btn-success">
			If you see this green button, bootstrap is working
		</Link>
	</div>
);
