import React from 'react';
import StarChar from './StarChar';


const StarList = props => {
    return (
        <div>
            {props.starwarsChar.map((char) => (
                <StarChar name={char.name} gender={char.gender}
                char={char}
                />
            ))}
        </div>
    );
};


export default StarList;