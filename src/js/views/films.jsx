import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Films = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
	 <h1> Films</h1>
	 <Link to="/">
				<button className="btn btn-primary row">Back home</button>
			</Link>
		</div>
	);
};

Films.propTypes = {
	match: PropTypes.object
};
