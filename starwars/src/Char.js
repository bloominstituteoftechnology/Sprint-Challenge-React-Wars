import React from 'react';
import './CharList.css';

const Char = ({ char }) => {
    return (
        <div className="Char-Card">
            <p>
                {char.name} {char.height}
            </p>
            <p>{char.mass}</p>
            <p>{char.skin_color}</p>
            <p>{char.birthyear}</p>
        </div>
    );
};

export default Char;
