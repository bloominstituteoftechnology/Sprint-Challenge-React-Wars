import React from 'react';
import Person from './Person';

const SWList = props => {
    return (
        <div>
            {props.traits.map((each, i) => <Person key={i} attrib={each} />)}
        </div>
    );
};

export default SWList;