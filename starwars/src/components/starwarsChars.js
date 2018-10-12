import React from 'react';

const StarWarsChars = () => {
    return (
        <div>
        <ul>
            {props.chars.map((char, i) => {
                return <li key- {i+1} >{char}</li>
            })};
        </ul>
        </div>
    )
};

export default StarWarsChars;