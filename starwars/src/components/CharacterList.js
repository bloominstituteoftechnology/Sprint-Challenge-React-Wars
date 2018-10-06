import React from 'react';
import CharacterCard from './CharacterCard.js'
import Title from './Title.js'
import './StarWars.css'

const CharacterList = props => {
	return (
		<div className="list-container">
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