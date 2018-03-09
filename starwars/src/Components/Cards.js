import React from "react";
import StarCharacters from "./StarCharacters";
import PropTypes from 'prop-types';

const Cards = props => {
	return (
		<div className="cardContainer">
			{props.characters.map(character => {
				return (
					<StarCharacters
						key={`${character.name} ${character}`}
						starChars={character}
					/>
				);
			})}
		</div>
	);
};

Cards.propTypes = {
    characters: PropTypes.array.isRequired
};

export default Cards;
