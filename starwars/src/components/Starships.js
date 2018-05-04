import React, { Component } from 'react'
import { Card, CardTitle } from 'reactstrap'

const Starships = props => {
    return (
        <Card>
        {props.starships.map(starship => {
            return <CardTitle key={starship}> {starship} </CardTitle>
        })}
        </Card>
    )
}

export default Starships