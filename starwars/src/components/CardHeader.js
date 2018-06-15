import React from 'react';
import './StarWars.css';


const CardHeader = props => {

	return(
	<div className={props.conatinerStyle}>	
	{props.charName.map(item => {
	return( 
	<div className={props.cardStyle}>		
	<h3>{item.name}</h3>
	<p>{item.gender}</p>	
	</div>
	);		
	})}
	</div>	
	);
};




export default CardHeader;
