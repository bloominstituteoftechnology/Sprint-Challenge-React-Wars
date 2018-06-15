import React from 'react';
import CharacterDetails from "./CharacterDetails";

const Character = (props) => {
return (
    <div className="custom-list">
        {props.characters.map(char => {
            return (
                <div>
                <CharacterDetails
                    character={char}
                    key={Math.random()}
                />
                </div>
            )
        })}
        
    </div>
);
};

export default Character