import React from "react"

const EyeColor = (props)=>{
    const style ={
        border:"6px solid #16374c",
        borderRadius:"10%"
    }
    return (
        <div style={style}>
        <i class="far fa-eye">
        Eye Color : {props.list.eye_color}
        </i>
        </div>
    )
}

export default EyeColor;