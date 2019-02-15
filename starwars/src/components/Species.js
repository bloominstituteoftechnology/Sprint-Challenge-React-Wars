import React from "react"

const Species =(props)=>{
    return (
        <div>
             {props.species.map(spe=>{
                 return <h6>List of Species :{spe}</h6>
             })}
        </div>
    )
}

export default Species