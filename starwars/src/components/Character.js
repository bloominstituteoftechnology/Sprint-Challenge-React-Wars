import React from 'react';
import './Character.css';

const Character = props => {
    return (
        <div className="MainChar">
            <h1>{props.characterData.name}</h1>
        </div>
    );
};

export default Character;