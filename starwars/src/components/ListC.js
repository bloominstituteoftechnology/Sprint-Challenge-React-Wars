import React from 'react';
import StarWarsC from './StarWarsC.js';
import StarWars from  './StarWars.css';

const ListC = props => {
    return ( <div>
        <h1> Star Wars Character</h1>
    <div> Name: {props.ListC.name} </div>
     <div>Gender: {props.ListC.gender} </div>
    < div> Eye Color: {props.ListC.eye_color} </div>
    < div> Height: {props.ListC.height} </div>
    < div> Home World: {props.ListC.homeworld} </div>
     </div>
    );
    };

export default  ListC;