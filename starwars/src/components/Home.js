import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                </div>
            <NavLink to="/species" className="row">
                <button className="col-12 subtitle"> Learn More About the Species of StarWars </button>
            </NavLink>
            <NavLink to="/planets" className="row">
                <button className="col-12 subtitle"> Learn More About the Planets of StarWars </button>
            </NavLink>
            <NavLink to="/characters" className="row">
                <button className="col-12 subtitle"> Learn More About the Characters of StarWars </button>
            </NavLink>
        </div>
    )
}

export default Home