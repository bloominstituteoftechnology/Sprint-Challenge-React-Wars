import React from 'react';
import CharCard from './CharCard';
import styles from './StarWars.css';

const AllCards = ({starwarsChars}) => {
    return (
        <div className='all-cards'>
            {starwarsChars.map((char, ind) => {
                return <CharCard 
                    char={char}
                    key={ind}
                    ind={ind}
                /> 
            })}
        </div>
    )
}

export default AllCards;