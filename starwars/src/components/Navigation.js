import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Navigation extends React.Component {
  render() {
    return (
        <div className="container-flud">
            <div className="row text-center mt-5">
            <NavLink to="/" className="col-3 mein-nav" style={{textDecoration: 'none', color: 'white'}}>Home</NavLink>
            <NavLink to="/species" className="col-3 mein-nav" style={{textDecoration: 'none', color: 'white'}}>Species</NavLink>
            <NavLink to="/planets" className="col-3 mein-nav" style={{textDecoration: 'none', color: 'white'}}>Planets</NavLink>
            <NavLink to="/characters" className="col-3 mein-nav" style={{textDecoration: 'none', color: 'white'}}>Characters</NavLink>
            </div>
        </div>
    );
  }
}
