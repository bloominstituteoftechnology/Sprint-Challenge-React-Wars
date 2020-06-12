// Write your Character component here

import React from 'react'
import Card from '../components/Styles/Card'

export default function Character (props) {

    const {name} = props

    console.log(name)

    console.log(props)
    return (
        <Card>
            <h2>{props.props.name}</h2>
            <p>{`Height: ${props.props.height}cm`}</p>
            <p>{`Mass: ${props.props.mass}kg`}</p>
            <p>{`Gender: ${props.props.gender}`}</p>
            <p>{`Birth Year: ${props.props.birth_year}`}</p>
            {console.log('character sanity check')}
        </Card>
    )
}