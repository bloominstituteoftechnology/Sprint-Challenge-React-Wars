import React from "react"
import Species from "./Species";
import StarsShips from "./StarsShips"
import Vehicules from "./Vehicules"
const ExtraInfo = (props)=>{
    return (
        <div>
                {props.list.edited}
              <h4>Hair color : {props.list.hair_color}</h4>
              <h4>height : {props.list.height}</h4>
              <h4>Homeworld : {props.list.homeworld}</h4>
              <h4>Mass : {props.list.mass}</h4>
              <h4>Name : {props.list.name}</h4>
              <h4>Skin Color : {props.list.skin_color}</h4>
              <Species key={new Date() } species={props.list.species} />
              <StarsShips key={new Date() } starships={props.list.starships} />
              <h4>url : {props.list.url} </h4>
              <Vehicules key={new Date()} vehicles={props.list.vehicles} />

              
        </div>
    )
}

export default ExtraInfo;