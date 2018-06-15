import React from 'react';
import StarWars from './StarWars';
import './StarWars.css'

const StarWarsList = (props) => {
    return (
        <div className ="app-Wrapper">
            {props.starwarsChars.map((starwars , index ) => {
                return <StarWars starWars ={starwars} key ={index} />
            })}
        </div>
    );
};

export default StarWarsList;