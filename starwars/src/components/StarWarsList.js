import React from 'react';

import StarWars from './StarWars';

import './StarWars.css'

function StarWarsList(props) {
    console.log(props);
    return (
        <div className='container'>
            {props.starwarsChars.map((char) => {
                return <StarWars char={char} />
            })
            }
        </div>
    )
}

export default StarWarsList;