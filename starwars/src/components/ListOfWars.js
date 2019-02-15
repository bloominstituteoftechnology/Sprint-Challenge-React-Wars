import React from "react"
import Created from "./Created"
import Edited from "./Edited"
import EyeColor from "./EyeColor"
import Films from "./Films"
import Gender from "./Gender"
import ExtraInfo from "./ExtraInfo"
const ListOfWars = (props)=>{
    return (
        <div>
              <h5>{props.list.birth_year}</h5>
              <Created list={props.list}/>
              <Edited list={props.list}/>
              <EyeColor list={props.list}/>
              <Films list={props.list} />
              <Gender list={props.list}/>
              <ExtraInfo lst={props.list} />
        </div>
    )
}

export default ListOfWars