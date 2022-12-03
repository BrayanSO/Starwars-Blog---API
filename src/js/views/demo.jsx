import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";

import "../../styles/demo.css";

export const Naves = () => {
	return (
		<div className="container flex-row">
		<h1>Naves</h1>
			<Link to="/">
				<button className="btn btn-primary row">Back home</button>
			</Link>
		</div>
	);
};
