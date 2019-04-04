import React from 'react';
import './StarWars.css'

const Title = props => {
	return (
		<div className="title-container">
			<h1>{props.title}</h1>
		</div>
	);
}

export default Title;