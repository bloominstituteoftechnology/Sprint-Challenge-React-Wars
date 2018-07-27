import React from 'react';
import './Character.css';

const Character = props => {
    return (
        <div className="char-container" >
            {props.char.name}
        </div>
    );
};

export default Character;