import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export const Films = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
	 <h1> Films</h1>
		</div>
	);
};

Films.propTypes = {
	match: PropTypes.object
};
