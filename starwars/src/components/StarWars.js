import React from 'react';
import './StarWars.css';
import StarWarCard from './StarWarCard'

const StarWars = (props) => {
    return (
            <div>
                {props.starWarsChars.map(char => {
                    return (
                        <StarWarCard char={char}/>
                    )
                })}
            </div>
    )
}

export default StarWars;