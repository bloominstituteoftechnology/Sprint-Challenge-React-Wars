import React from 'react';

const Chars = ({ character }) => {
    return (
        <div >
            <p>{character.name}</p>
            <p>{character.height}</p>
        </div>
    )
}

export default Chars;
