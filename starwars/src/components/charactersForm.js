import React from 'react';

const CharactersForm = props => {
    return (
        <button className="btn" onClick={props.handleDisplayInfo} onChange={props.handleChangeChar}>Characters</button>
    );
}
export default CharactersForm; 