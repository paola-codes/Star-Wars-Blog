import React, { useContext } from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import { myContext } from "../store/appContext";

export const CharacterCard = props => {
	const { actions } = useContext(myContext);

	return (
		<div className="card p-0 me-3 mb-4" style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "22rem" }}>
			<img
				src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2019%2F04%2FStar-Wars-The-Force-Awakens.jpg&f=1&nofb=1"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body p-3">
				<h5 className="card-title text-center px-3 py-0">{props.card_character.name}</h5>
				<p className="card-text">Gender: {props.card_character.gender}</p>
				<p className="card-text">Hair Color: {props.card_character.hair_color}</p>
				<p className="card-text">Eye Color: {props.card_character.eye_color}</p>
				<div className="d-flex justify-content-between">
					<Link to={`/detailscharacters/${props.index}`}>
						<button href="#" className="btn btn-primary">
							Learn more!
						</button>
					</Link>
					<button
						href="#"
						className="btn btn-warning"
						onClick={() => actions.addFavorites(props.card_character.name)}>
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	card_character: PropType.object,
	index: PropType.number
};
