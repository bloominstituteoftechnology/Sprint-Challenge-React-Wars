import react from "react";
import CharacterList from "./CharacterList";

const CharacterCard = props => {
    const {name, height, mass} = props; 
    console.log(name, height, mass);
    return (    
        <>
            <div>{character}</div>
        </>
    )
    }

export default CharacterCard;

