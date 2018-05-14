import React from 'react';
import { CardTitle } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Vehicles = props => {
    return (
    <div className="container">
        <h3 className="subtitle"> Click to Learn More About A Vehicle </h3>
        {props.vehicles.map(vehicle => {
            return (
                <div className="row" key={vehicle.url}>
                    <NavLink to={`/vehicles/${vehicle.name.toLowerCase().split(' ').join('')}`} className="col-12"> <CardTitle className="mt-5 mein-card bold-card">{vehicle.name}</CardTitle></NavLink>
                </div>
        )})}
    </div>
    )
}
export default Vehicles