import React from "react"

const Edited = (props)=>{
    return (
        <div>
                {props.list.edited}
              <h4>Hair color : {props.list.hair_color}</h4>
              <h4>height : {props.list.height}</h4>
              <h4>Homeworld : {props.list.homeworld}</h4>
              <h4>Mass : {props.list.mass}</h4>
        </div>
    )
}

export default Edited;