import React from 'react';
import "./StarWars.css";
import CharCard from './CharCard.js'

  function CardDisplay (props) {
      
        let cards = props.chars.map((char) => {
            return <CharCard key={char.name} char={char} />
        })

        let names = props.chars.map((char) => {
            let classList = "char-button button";
            if (char.hidden) {
                classList = classList + " hidden";
            }
            return <div key={char.name} id={char.name} className={classList} onClick={props.handleClick}>{char.name}</div>
        })


    return (
        <div className="card-display">
            <div className="card-selector">
                {names}

            </div>
            <div className="cards">
            {cards}

            </div>
        </div>
    );
  }

export default CardDisplay;
