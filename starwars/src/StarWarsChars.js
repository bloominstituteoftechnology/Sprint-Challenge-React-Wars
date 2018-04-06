import React from 'react';


const StarWarsChars = props => {
    return <div key={props.char.name}>{props.char.name}</div>;
};

export default StarWarsChars;