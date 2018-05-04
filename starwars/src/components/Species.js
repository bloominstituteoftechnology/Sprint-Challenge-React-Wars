import React, { Component } from 'react'

const Species = props => {
    return (
        <div className="container fierce">
            <div className="row">
                <select className="mw-100 mein-issues">
                    <option>Species</option>
                    {props.species.map(species => {
                        return <option key={species}> {species} </option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default Species