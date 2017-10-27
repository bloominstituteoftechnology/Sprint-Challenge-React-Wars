import React from 'react';
import './Characters.css';

const Characters = (props) => {
    console.log(props.starwarsChars);
    return (
        <div>
            {props.starwarsChars.map((char) => {
                return (
                    <div className="CharacterList">
                        <h3>{char.name}</h3>
                    </div>
                )
            })}
        </div>
    );
}

export default Characters;