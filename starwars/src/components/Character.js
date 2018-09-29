import React from "react";
import Card from "./Card"

const Character = (props) =>{
    return(
        <div>
            {props.starwarsChars.map(item =>{
                return(
                        <Card 
                        name={item.name}
                        birth_year={item.birth_year}
                        eye_color={item.eye_color}
                        gender={item.gender}
                        hair_color={item.hair_color}
                        height={item.height}/>
                )
            })}
        </div>
    )
}

export default Character