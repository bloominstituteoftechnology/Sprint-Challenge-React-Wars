import react from "react";

const CharacterCard = (props) => {
    const {characters} = props;
        console.log(props);
        return (  
                <>  
                <div>{name}</div>
                <div>{mass}</div>
                <div>{height}</div>
                </>
            );
        };


        export default CharacterCard;

