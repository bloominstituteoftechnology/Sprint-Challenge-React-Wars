import React from 'react';
import Char from './Char';
import './StarWars.css'

//iterate over props.chars and return new array for the Virtual DOM

const StarwarsChars = props => {
    // iterate thropugh each item, return an array of divs
    return (
        //give JSX an array of items. A list of new char cards represented as divs is returned.
        <div className="chars-wrapper">
            {props.chars.map(char => {
                return <Char key={char.name} char={char} />;
            })}
        </div>
    );
};

export default StarwarsChars;