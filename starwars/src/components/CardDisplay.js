import React from 'react';
import CharCard from './CharCard.js'

  function CardDisplay (props) {

        let cards = props.chars.map((char) => {
            return <CharCard key={char.name} char={char} />
        })

    return (
        <div className="card-display">
            {cards}
        </div>
    );
  }

export default CardDisplay;
