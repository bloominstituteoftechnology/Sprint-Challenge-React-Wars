import React from 'react';
import CharacterCard from './CharacterCard.js'

const CharacterList = props => {
	return (
		<div>
			<CharacterCard 
				name = {props.name}
				gender = {props.gender} 
			/>
		</div>
	)
}
export default CharacterList;