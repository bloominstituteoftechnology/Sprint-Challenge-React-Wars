
import React from 'react';
import ListC from './ListC.js';
// import StarWars from  './StarWars.css';

const StarWarsC =  props =>  {
    return (

        <div className="container">
            {props.List.map((list,i) => 
                <ListC key={i} ListC={list}/>)}
        </div>
    );
};          

export default StarWarsC;
