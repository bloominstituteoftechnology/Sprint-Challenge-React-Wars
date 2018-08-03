import React from 'react';
import StarWarsC from './StarWarsC.js';

const ListC = props => {
    return ( <div>
    <div> {props.ListC.name} </div>
     <div> {props.ListC.gender} </div>
     </div>
    );
    };

export default  ListC;