
import React from 'react';
import List from './List.js';
import StarWars from  './StarWars.css';

const StarWarsC =  props =>  {
    return (

        <div>
            {props.List.map(list => <List key={Date.now()} List={list}/>)}
        </div>
    );
};          

export default StarWarsC;
