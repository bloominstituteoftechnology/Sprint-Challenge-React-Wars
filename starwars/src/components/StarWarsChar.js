import React from 'react';
import Characters from "./Characters.js"

const StarWarsChar = (props) => {
	return props.list.map(character => {
		return (
			<div className="CharacterList">
			   <Characters
				key = {character.name}
				header = {character.name}
				birthYear = {character.birth_year}
				species = {character.species[0]}
				gender = {character.gender}
				skinColor = {character.skin_color}
				eyeColor = {character.eye_color}
				hairColor = {character.hair_color}
				height = {character.height}
				mass = {character.mass}
		       />		
			</div>
		)
	})
}

export default StarWarsChar;