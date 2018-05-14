import React from 'react';
import { NavLink } from 'react-router-dom'

export default class Navigation extends React.Component {
  render() {
    return (
            <div className="row text-center">
            <NavLink to="/" className="col mein-nav">Home</NavLink>
            <NavLink to="/species" className="col mein-nav">Species</NavLink>
            <NavLink to="/planets" className="col mein-nav">Planets</NavLink>
            <NavLink to="/characters" className="col mein-nav">Characters</NavLink>
            <NavLink to="/films" className="col mein-nav">Films</NavLink>
            <NavLink to="/vehicles" className="col mein-nav">Vehicles</NavLink>
            <NavLink to="/starships" className="col mein-nav">Starships</NavLink>
            </div>
    );
  }
}
