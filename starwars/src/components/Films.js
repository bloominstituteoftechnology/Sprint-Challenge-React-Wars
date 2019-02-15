import React from "react"

const Films = (props)=>{
    return (
        <div>
                {props.list.films.map(film=><h5>{film}</h5>)}
        </div>
    )
}

export default Films;