import React from 'react';

const Character = props => {
    return (
        <div>
            <h1>{props.characterData.name}</h1>
        </div>
    );
};

export default Character;