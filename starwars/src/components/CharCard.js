import React from 'react';

  function CharCard (props) {

    return (
        <div className="char-card">
            <h1>{props.char.name}</h1>
        </div>
    );

  }

export default CharCard;
