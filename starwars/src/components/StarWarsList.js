import React from "react"
import ListOfStars from "./ListOfWars"

const StarWarsList = (props)=>{
    return (       
         <div>
                {props.starwarsChars.map(list=>{
                    return <ListOfStars key={new Date ()}list={list} />
                })}

        </div>
    )
}

export default StarWarsList