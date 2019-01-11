import React from 'react';
import './StarWars.css';
import Fact from './Fact';

const FactList = (props) => {

	return(
		<div className="list">
			{props.starwarsChars.map( fact => {
				return(
					<Fact key = {fact.created} fact = {fact} />
				)
			})} 
		</div>
	)
};
        

export default FactList;