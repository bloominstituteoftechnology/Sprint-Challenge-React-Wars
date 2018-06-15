import React from 'react';
import StarWars from './StarWars';

const StarWarsList = (props) => {
    return (
        <div>
            {props.starwarsChars.map((starwars , index ) => {
                return <StarWars starWars ={starwars} key ={index} />
            })}
        </div>
    );
};

export default StarWarsList;