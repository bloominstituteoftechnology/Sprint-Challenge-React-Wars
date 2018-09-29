import React from 'react'
import CharacterCard from './CharacterCard'

const characters = props => (
	<React.Fragment>
		{props.characters.map(character => (
			<CharacterCard key={character.created} character={character} />
		))}
	</React.Fragment>
)
export default characters
