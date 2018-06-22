import React from 'react';
// import CharIndex from './CharIndex'

const StarWarsPeeps = props => {
    return (
        <div className="StarWarsChars">
            {props.jedi.name} 
        </div>
    );
};

export default StarWarsPeeps;