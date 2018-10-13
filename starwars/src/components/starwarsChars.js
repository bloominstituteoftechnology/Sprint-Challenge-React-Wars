import React from 'react';

const StarWarsChars = (props) => {
    return (
        <div>
        <ul>
            {props.chars.map((char, i) => {
                return <li key = {i+1} >{char.name}</li>
            })};
        </ul>
        </div>
    )
};

export default StarWarsChars;