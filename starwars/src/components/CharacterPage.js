import React from "react";




const CharacterPage = props => {
	return (
		<div className = 'character-info'>
			<div>Name: {props.charFacts.name}</div>		
			<div>Gender: {props.charFacts.gender}</div>
	
		</div>
	);
}


export default CharacterPage;