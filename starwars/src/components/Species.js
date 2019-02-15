import React from "react"

const Species =(props)=>{
    const style={
        border:"6px solid #b7e5cb",
        borderRadius:"10%",
        display:"block",
        margin:"0 auto",
        width:"90%",
        flexDirection :"column",
        justifyContent:"center",
    }
    return (
        <div style={style}>
             {props.species.map(spe=>{
                 return <h6>List of Species :{spe}</h6>
             })}
        </div>
    )
}

export default Species