import React from "react"
import { Starwars } from './Starwars'
import './StarWars.css'
export const StarwarsList = props => {

    return (
        <div>
        {props.list.map((chars, index)=> {
                return <Starwars
                    chars={chars}
                    name={chars.name}
                    key={index}
                    />
            })}
        </div>
    )
}