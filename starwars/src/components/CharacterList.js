import React from "react"
import StarWars from "./StarWars"

const CharacterList = props =>{
    console.log(props);
    return (
        <div>
            {props.chars.map( (i, index) => {
                return <StarWars chars={i} key={index} />
            })
        }
        </div>
    )
}

export default CharacterList