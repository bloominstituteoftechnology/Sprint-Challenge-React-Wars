import React from "react"
import ListOfStars from "./ListOfWars"

const StarWarsList = (props)=>{
    const style={
        displa:"block",
        margin:"0 auto",
        width:"80%",
        border:"1px solid #15133a",
        fontFamily:"'Coiny', cursive",
        color:"#19164c",
        fontSize:"1.4rem"
    }
    return (       
         <div style={style}>
                {props.starwarsChars.map(list=>{
                    return <ListOfStars key={new Date ()}list={list} />
                })}

        </div>
    )
}

export default StarWarsList