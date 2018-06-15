import React from 'react';
import StarWarsCard from './StarWarsCard';

const starWars = props => {
    return (
        <div className="starwars"> {
            props.starwarsChars.map((item, index) => {
                return (
                    <StarWarsCard
                        birthYear={index}
                    />                  
                );
            })
        }
        </div>
    );
};

export default starWars;