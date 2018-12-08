import React from 'react'

const NameCard = (props) => {
    return (
        <div className="character-name">
            {props.data.map(character => character.name)}
        </div>
    )
};

export default NameCard;