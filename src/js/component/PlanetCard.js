import React, { useContext } from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import { myContext } from "../store/appContext";

export const PlanetCard = props => {
	const { actions } = useContext(myContext);

	return (
		<div className="card p-0 me-3 mb-4" style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "22rem" }}>
			<img
				src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.teahub.io%2Fphotos%2Ffull%2F0-1929_star-wars-wallpaper-planet.jpg&f=1&nofb=1"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body p-3">
				<h5 className="card-title text-center px-3 py-0">{props.card_planet.name}</h5>
				<p className="card-text">Population: {props.card_planet.population}</p>
				<p className="card-text">Terrain: {props.card_planet.terrain}</p>
				<div className="d-flex justify-content-between">
					<Link to={`/detailsplanets/${props.index}`}>
						<button href="#" className="btn btn-primary">
							Learn more!
						</button>
					</Link>
					<button
						href="#"
						className="btn btn-warning"
						onClick={() => actions.addFavorites(props.card_planet.name)}>
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	card_planet: PropType.object,
	index: PropType.number
};
