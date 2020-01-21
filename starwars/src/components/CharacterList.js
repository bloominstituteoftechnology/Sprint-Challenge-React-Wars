import React from 'react';
import Card from './Card';
import './StarWars.css';

const CharacterList = ((props) => {
    return (
        <div className="card">
            <Card data={props}/>
        </div>
    );
})

export default CharacterList;