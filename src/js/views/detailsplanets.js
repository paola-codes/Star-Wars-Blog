import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropType from "prop-types";
import { myContext } from "../store/appContext";

export const DetailsPlanets = props => {
	const { store } = useContext(myContext);
	const item = store.planetList[props.match.params.id];

	if (item) {
		return (
			<div className="container-fluid bg-light p-4 m-0">
				<div className="row mb-3">
					<div className="col">
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.teahub.io%2Fphotos%2Ffull%2F0-1929_star-wars-wallpaper-planet.jpg&f=1&nofb=1"
							className="img-fluid"
							height="60%"
							alt="..."
						/>
					</div>
					<div className="col">
						<h1>{item.name}</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						</p>
					</div>
				</div>
				<div className="row mb-3">
					<hr />
					<div className="col">
						<h4>Name</h4>
						<h5>{item.name}</h5>
					</div>
					<div className="col">
						<h4>Climate</h4>
						<h5>{item.climate}</h5>
					</div>
					<div className="col">
						<h4>Population</h4>
						<h5>{item.population}</h5>
					</div>
					<div className="col">
						<h4>Orbital Period</h4>
						<h5>{item.orbital_period}</h5>
					</div>
					<div className="col">
						<h4>Rotation Period</h4>
						<h5>{item.rotation_period}</h5>
					</div>
					<div className="col">
						<h4>Diameter</h4>
						<h5>{item.diameter}</h5>
					</div>
				</div>
				<Link to="/home">
					<h5>Back to home</h5>
				</Link>
			</div>
		);
	}
	return <h1>Loading</h1>;
};

DetailsPlanets.propTypes = {
	match: PropType.object
};
