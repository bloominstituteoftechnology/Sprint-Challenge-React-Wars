import React from "react";
import './StarWars.css';
import Char from './Char';

const StarWarsChars = props => {
    return(
    <div>{props.starwarsChars.map(swchars => <Char key={swchars.name} swchars={swchars} />)}</div>
        );
}
export default StarWarsChars;