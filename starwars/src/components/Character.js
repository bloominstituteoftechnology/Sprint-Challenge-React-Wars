import React from 'react';

const Character = props => {
    return (
        <div className="character">
            {props.character.name}
        </div>
    )
}

export default Character;