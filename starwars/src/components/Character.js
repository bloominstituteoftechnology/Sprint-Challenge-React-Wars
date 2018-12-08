import React from 'react';

const Character = props => {
    return (
        <div className="third">
            {props.character.name}
        </div>
    )
}

export default Character;