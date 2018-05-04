import React, { Component } from 'react'
import { Card, CardTitle } from 'reactstrap'

const Species = props => {
    return (
        <Card>
        {props.species.map(species => {
            return <CardTitle key={species}> {species} </CardTitle>
        })}
        </Card>
    )
}

export default Species