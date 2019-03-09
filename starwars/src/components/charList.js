import React from 'react'

import '../components/StarWars.css';
import Character from './character'

function CharList(props) {
    const { characterList , viewName}  = props;
    return (
        <div className='characterList container'>
            {characterList.map(item => (
                <Character 
                    item={item}
                    viewName={viewName}
                />
            ))}
        </div>
        
    )
}

export default CharList