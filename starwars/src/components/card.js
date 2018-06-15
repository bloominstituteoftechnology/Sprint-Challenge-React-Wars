// card maker 
import React from 'react';
import './StarWars.css';

const Card = props =>{
return(
	<div className="Card">
	{props.starwarsChars.map((value, index) => (
	<div key={Math.random(Date.now())} className='unicorn'>
	<h1>name: {props.starwarsChars[index].name}</h1>
	<h3>gender:  {props.starwarsChars[index].gender}</h3>
	<h3>height:  {props.starwarsChars[index].height}</h3>
	</div>
	))
	}
	</div>
	);
};


export default Card;