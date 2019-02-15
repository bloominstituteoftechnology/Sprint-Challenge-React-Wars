import React from "react"

const Films = (props)=>{
    const style={
        border:"6px solid #dae595",
        borderRadius:"10%",
        display:"block",
        margin:"0 auto",
        width:"90%",
        flexDirection :"column",
        justifyContent:"center",
    }
    return (
        <div style={style}>
        
        {props.list.films.map((film,index)=><h5><i class="fas fa-film"><p></p>Films {index+1}  :{film}</i></h5>)}

        </div>
    )
}

export default Films;