import React from "react";

const CharacterCard = props => {
    return(
        <div className = "characters" key={props.key}>
            <h2>Character:{props.name}</h2>

        </div>
    );
};
export default CharacterCard;