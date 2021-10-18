import React, { useContext } from "react";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import "../../styles/home.scss";
import { myContext } from "../store/appContext";

export const Home = () => {
	const { store } = useContext(myContext);

	return (
		<div className="container-fluid p-0 pb-4 m-0 bg-dark bg-opacity-75">
			<h1 className="mx-0 px-4 pb-2 pt-4 text-white">Characters</h1>
			<div className="d-flex flex-row mx-auto" style={{ width: "90%", overflow: "auto" }}>
				{store.characterList.map((character, index) => (
					<CharacterCard key={index} card_character={character} index={index} />
				))}
			</div>
			<h1 className="mx-0 px-4 pb-2 pt-4 text-white">Planets</h1>
			<div className="d-flex flex-row mx-auto mb-4" style={{ width: "90%", overflow: "auto" }}>
				{store.planetList.map((planet, index) => (
					<PlanetCard key={index} card_planet={planet} index={index} />
				))}
			</div>
		</div>
	);
};
