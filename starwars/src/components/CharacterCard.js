import React from 'react'

const charactercard = props => (
	<div className="charactercard">
		<p className="charactercard__title">My name is: {props.character.name}</p>
		<div className="charactercard__p1">
			<p>I was created: {props.character.created}</p>
			<p>My eye color is: {props.character.eye_color}</p>
			<p>My gender is: {props.character.gender}</p>
			<p>My height is: {props.character.height}</p>
		</div>
	</div>
)

export default charactercard
