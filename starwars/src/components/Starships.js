import React from 'react';
import { CardTitle } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Starships = props => {
    return (
    <div className="container">
        <h3 className="subtitle"> Click to Learn More About A Starship </h3>
        {props.starships.map(starship => {
            return (
                <div className="row" key={starship.url}>
                    <NavLink to={`/starships/${starship.name.toLowerCase().split(' ').join('')}`} className="col-12"> <CardTitle className="mt-5 mein-card bold-card">{starship.name}</CardTitle></NavLink>
                </div>
        )})}
    </div>
    )
}
export default Starships