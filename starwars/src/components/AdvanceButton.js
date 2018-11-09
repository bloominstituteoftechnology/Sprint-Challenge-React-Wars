import React from 'react';

const AdvanceButton = props => {
    return (
        <div 
        className="advance-button"
        onClick={()=>props.getCharacters(props.destination)}
        >
            {props.name}
        </div>
    );
}

export default AdvanceButton;