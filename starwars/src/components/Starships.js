import React, { Component } from 'react'

const Starships = props => {
    return (
<div className="container fierce">
    <div className="row">
        <select className="mw-100 mein-issues">
            <option>Starships</option>
                {props.starships.map(starship => {
                    return <option key={starship}> {starship} </option>
        })}
        </select>
        </div>
    </div>
    )
}

export default Starships