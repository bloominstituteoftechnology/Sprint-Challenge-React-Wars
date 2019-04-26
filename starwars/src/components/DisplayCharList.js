import React from 'react';
import DisplayCard from './DisplayCard'
import './StarWars.css'

function DisplayCharList(props) {
	console.log(props)
	return (
		<ul className = "cardUL">
			{props.characters.map( char => {
				return <DisplayCard 
							key = {char.created}
							characterName ={char.name}
							birthday = {char.birth_year}
							mass = {char.mass}
							height = {char.height}/>

			})}
		</ul>
	)
}

export default DisplayCharList;





 
           
          