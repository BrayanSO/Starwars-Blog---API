import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
export const Planets = () => {
	return (
		<div className="container flex-row">
		<h1>Planest</h1>
			<Link to="/">
				<button className="btn btn-primary row">Back home</button>
			</Link>
		</div>
	);
};
