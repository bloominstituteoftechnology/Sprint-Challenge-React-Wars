import React from 'react'

const charactercard = props => (
	<div className="charactercard">
		<p>My name is: {props.character.name}</p>
		<p>I was created: {props.character.created}</p>
		<p>My eye color is: {props.character.eye_color}</p>
		<p>My gender is: {props.character.gender}</p>
		<p>My height is: {props.character.height}</p>
	</div>
)

export default charactercard
