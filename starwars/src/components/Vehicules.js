import React from "react"

const Vehicules = (props)=>{
    return (
        <div>
                 {props.vehicles.map(veh=>{
                     return <h3>list of vehicules: {veh}</h3>
                })}
        </div>
    )
}


export default Vehicules