import React from 'react';
import RWarCell from './RWarCell';
import './StarWars.css';

const RWarList = (props) => {
	return (
		<section className="rwar-list">
			{props.characters.map((character) => (
				<RWarCell character={character} />
			))}
		</section>
	);
};

export default RWarList;
