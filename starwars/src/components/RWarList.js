import React from 'react';
import RwarCell from './RWarCell';
import './StarWars.css';

const RWarList = () => {
	return (
		<section className="rwar-list">
			<RWarCell />
			<RWarCell />
			<RWarCell />
		</section>
	);
};

export default RWarList;
