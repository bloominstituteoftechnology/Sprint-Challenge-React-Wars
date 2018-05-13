import React from 'react';
import { CardTitle } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Species = props => {
    return (
    <div className="container">
        <h3 className="subtitle"> Click to Learn More About A Species </h3>
        {props.species.map(species => {
            return (
                <div className="row">
                    <NavLink to={`/species/${species.name.toLowerCase()}`} key={species.url} className="col-12"> <CardTitle className="mt-5 mein-card bold-card">{species.name}</CardTitle></NavLink>
                </div>
        )})}
    </div>
    )
}
export default Species