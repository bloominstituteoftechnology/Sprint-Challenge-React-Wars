import React, { Component } from 'react';
import { CardTitle } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Characters = props => {
    return (
    <div className="container">
        <h3 className="subtitle"> Click to Learn More About a Character </h3>
        {props.characters.map(character => {
            return (<NavLink to={`/characters/${character.name}`} key={character.url} className="col-12"> <div> <CardTitle className="mt-5 mein-card bold-card">{character.name}</CardTitle></div></NavLink>
        )})}
    </div>
    )
}
export default Characters