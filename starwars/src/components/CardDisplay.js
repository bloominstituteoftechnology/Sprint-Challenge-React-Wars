import React from 'react';
import "./StarWars.css";
import CharCard from './CharCard.js'

  function CardDisplay (props) {
      
        let cards = props.chars.map((char) => {
            return <CharCard key={char.name} char={char} />
        })

        let names = props.chars.map((char) => {
            return <div key={char.name} id={char.name} className="char-button button">{char.name}</div>
        })


    return (
        <div className="card-display">
            <div className="card-selector">
                {names}

            </div>
            {cards}
        </div>
    );
  }

export default CardDisplay;
