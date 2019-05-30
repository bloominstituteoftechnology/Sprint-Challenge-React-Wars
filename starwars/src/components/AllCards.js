import React from 'react';
import CharCard from './CharCard';



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