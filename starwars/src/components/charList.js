import React from 'react'

import '../components/StarWars.css';
import Character from './character'

function CharList() {
    return (
        <div className='characterList-container'>
            <p>Hello from inside charList</p>
            <Character />
        </div>
        
    )
}

export default CharList