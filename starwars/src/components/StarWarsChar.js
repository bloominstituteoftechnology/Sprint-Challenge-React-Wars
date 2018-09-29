import React from 'react';
import './StarWars.css';

const StarWarsChar = (props) => {
    return (
        <div> 
            There is text.
            <div>
                {props.starwarsChars.birth_year}
            </div>

            {props.starwarsChars.map(char => {
                return (
                    <div key={char.toString()}>
                        {char.name}
                    </div>
                )
            })}
        </div>
    )
}

export default StarWarsChar;