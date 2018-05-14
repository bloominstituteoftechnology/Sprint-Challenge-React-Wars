import React from 'react';
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container-fluid mein-home">
            <div className="row no-gutters">
            <NavLink to="/species" className="col-12 subtitle"> Learn More About the Species of StarWars </NavLink>
            </div>
            <div className="row no-gutters">
            <NavLink to="/planets" className="col-12 subtitle"> Learn More About the Planets of StarWars </NavLink>
            </div>
            <div className="row no-gutters">
            <NavLink to="/characters" className="col-12 subtitle"> Learn More About the Characters of StarWars </NavLink>
            </div>
            <div className="row no-gutters">
            <NavLink to="/vehicles" className="col-12 subtitle"> Learn More About the Vehicles of StarWars </NavLink>
            </div>
            <div className="row no-gutters">
            <NavLink to="/starships" className="col-12 subtitle"> Learn More About the Starships of StarWars </NavLink>
            </div>
            <div className="row no-gutters">
            <NavLink to="/films" className="col-12 subtitle"> Learn More About the Films of StarWars </NavLink>
            </div>
        </div>
    )
}

export default Home