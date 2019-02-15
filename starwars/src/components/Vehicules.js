import React from "react"

const Vehicules = (props)=>{

    const style={
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
        color:"#15133a"
    }
    return (
        <div style={style}>
                 {props.vehicles.map(veh=>{
                     return <h3>list of vehicules: {veh}</h3>
                })}
        </div>
    )
}


export default Vehicules