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
                    /> })}
    
        <div className="btn-wrapper">
            <div className="prev" onClick={props.showPrevPage}>Previous</div>
            <div className="next" onClick={props.showNextPage}>Next</div>
        </div>
    </div>
    )
}