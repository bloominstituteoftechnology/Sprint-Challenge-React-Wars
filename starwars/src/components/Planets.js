import React from 'react';
import { CardTitle } from 'reactstrap'
import { NavLink } from 'react-router-dom'


const Planets = props => {
    return (
    <div className="container">
        <h3 className="subtitle"> Click to Learn More About a Planet </h3>
        {props.planets.map(planet => {
            return (
            <div className="row" key={planet.name}>
                <NavLink to={`/planets/${planet.name.toLowerCase().split(' ').join('')}`} key={planet.url} className="col-12"> <CardTitle className="mein-card bold-card mt-5"> {planet.name} </CardTitle></NavLink>
            </div>
            )
        })}
       
    </div>
    )
}
export default Planets