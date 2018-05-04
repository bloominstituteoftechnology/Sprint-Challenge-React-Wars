import React, { Component } from 'react'
import { Card, CardTitle } from 'reactstrap'

const Films = props => {
    return (
        <Card>
            {props.films.map(film => {
                return <CardTitle key={film}> {film} </CardTitle>    
             }) }
        </Card>
    )
}

export default Films