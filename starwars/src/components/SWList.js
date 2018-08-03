import React from 'react';
import Person from './Person';
import './StarWars.css';

const SWList = props => {
    return (
        <div className="container">
            {props.traits.map((each, i) => <Person key={i} attrib={each} />)}
        </div>
    );
};

export default SWList;