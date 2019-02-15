import React from "react"
import Created from "./Created"
import ExtraInfo from "./ExtraInfo"
import EyeColor from "./EyeColor"
import Films from "./Films"
import Gender from "./Gender"
const ListOfWars = (props)=>{
    return (
        <div>
              <h5>{props.list.birth_year}</h5>
              <Created list={props.list}/>
              <ExtraInfo list={props.list}/>
              <EyeColor list={props.list}/>
              <Films list={props.list} />
              <Gender list={props.list}/>
        </div>
    )
}

export default ListOfWars