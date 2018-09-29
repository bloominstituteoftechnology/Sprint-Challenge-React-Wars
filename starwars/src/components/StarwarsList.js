import React from "react"
import { Starwars } from './Starwars'


export const StarwarsList = props => {

    return (
    <div>
        {props.list.map(chars => {
                return <Starwars
                    chars={chars}
                    name={chars.name}
                    key={chars.id}
                    />
            })}
        </div>
    )
}