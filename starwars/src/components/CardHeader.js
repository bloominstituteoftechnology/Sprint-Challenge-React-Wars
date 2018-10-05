import React from 'react';

const CardHeader = (props) => {
    return (
        <div className="header">
            <p>{props.character.name}</p>
        </div>
    );
}

export default CardHeader;