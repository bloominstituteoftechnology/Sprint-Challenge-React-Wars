import React from "react";
import Card from "./Card"

const Character = (props) =>{
    return(
        <div>
            {props.starwarsChars.map(item =>{
                return(
                        <Card name={item.name}/>
                )
            })}
        </div>
    )
}

export default Character