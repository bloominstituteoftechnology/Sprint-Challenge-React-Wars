import React from 'react';
import CharacterCard from './CharacterCard.js'
import Title from './Title.js'

const CharacterList = props => {
	return (
		<div>
			<Title 
				title = {props.title} 
			/>

			<CharacterCard 
				birthYear = {props.birthYear}
				gender = {props.gender} 
				mass = {props.mass}
				height = {props.height}
			/>
		</div>
	)
}
export default CharacterList;