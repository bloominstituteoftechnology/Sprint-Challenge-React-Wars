import React from 'react';
import StarChar from './StarChar';


const StarList = props => {
    return (
        <div>
            {props.starwarsChars.map((char) => (
                <StarChar name={char} char={char}/>
            ))}
        </div>
    );
};


export default StarList;