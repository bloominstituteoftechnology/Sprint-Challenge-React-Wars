import React from 'react';
import './StarWars.css';
import StarWarsCard from './StarWarsCard';




const StarWarsList = props => {
    return (
        <div className="lists">
            {props.starwarsChars.map(starwars => (
                 <StarWarsCard
                    key={Math.random()}
                    cards={starwars}
                />
            ))}
        </div>  
    );
}

export default StarWarsList