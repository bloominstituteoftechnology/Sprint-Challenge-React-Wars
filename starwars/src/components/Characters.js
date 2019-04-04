import React from 'react';
import CharacterList from './CharacterList.js'

const Characters = props => {
	return props.list.map(character => {
		return (
			<div className="character-container">
				<CharacterList 
					key = {Math.random()}
					title = {character.name}
					birthYear = {character.birth_year}
					gender = {character.gender}
					mass = {character.mass}
					height = {character.height}
					skinColor = {character.skin_color}
					eyeColor = {character.eye_color}
				/>
			</div>
		)
	})
}

export default Characters;