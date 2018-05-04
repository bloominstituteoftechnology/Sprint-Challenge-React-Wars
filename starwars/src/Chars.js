import React from 'react';

const Chars = ({ CharacterData }) => {
    return (
        <div >
            <p>{CharacterData.name}</p>
            <p>{CharacterData.height}</p>
        </div>
    )
}

export default Chars;
