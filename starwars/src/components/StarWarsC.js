
import React from 'react';
import ListC from './ListC.js';
// import StarWars from  './StarWars.css';

const StarWarsC =  props =>  {
    return (

        <div className="container">
            {props.list.map((eachCharObject,i) => 
                <ListC key={i} charObject={eachCharObject}/>)}
        </div>
    );
};          

export default StarWarsC;