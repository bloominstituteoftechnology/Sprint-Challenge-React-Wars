import React from 'react';
import './StarWars.css';
import StarWarsCard from './StarWarsCard';




const StarWarsList = props => {
    return (
        <div className="lists">
            {props.starwarsChars.map(starwars => (
                <StarWarsCard
                    name={starwars.name}
                    starwars={starwars}
                />
            ))}
        </div>  
    );
}

export default StarWarsList