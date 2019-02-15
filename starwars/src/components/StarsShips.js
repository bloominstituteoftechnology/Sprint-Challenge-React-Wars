import React from "react"

const StarShips =(props)=>{
    return (
        <div>
             {props.starships.map(ship=>{
                 return <h6>List of ships :{ship}</h6>
             })}
        </div>
    )
}

export default StarShips