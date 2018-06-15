import React from 'react';
import CharacterDetails from "./CharacterDetails";

const Character = (props) => {
// let card = props.starwarsChars.map(card => (
//     <CharacterDetails
//     characters={card.name}
//     key={Math.random()} />
// ))

// return (
//     <div>
//         {card}
//         </div>
// )

return (
    <div className="custom-list">
        {props.characters.map(char => {
            return (
                <CharacterDetails
                    character={char}
                    key={char.created}
                />
            )
        })}
        
    </div>
);
};

export default Character