import React from 'react';
import Char from './Char';
import './StarWars.css';

const StarwarsChars = props => {
    return ( 
    <div className="chars-wrapper">
    {props.chars.map(char => <Char key={char.name} char={char} />)}
    </div>
     );
}
 
export default StarwarsChars;