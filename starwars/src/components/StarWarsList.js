import React from 'react';
import StarWarsData from './StarWarsData';
import 'StarWars.css';

function StarWarsList (props) {
    return(
        <div>
            {props.StarWarsData.map(list => 
                <StarWarsData key={list.name} list={list} />
            )}
        </div>
    )
}

export default StarWarsList;