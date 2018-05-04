import React, { Component } from 'react'
import { Card, CardTitle } from 'reactstrap'

const Vehicles = props => {
    return (
        <Card>
        {props.vehicles.map(vehicle => {
            return <CardTitle key={vehicle}> {vehicle} </CardTitle>
        })}
        </Card>
    )
}

export default Vehicles