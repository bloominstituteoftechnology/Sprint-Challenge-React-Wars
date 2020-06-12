// Write your Character component here

import React from 'react'

export default function Character (props) {

    const {name} = props

    console.log(name)

    console.log(props)
    return (
        <div>
            <ul>{`Name: ${props.props.name}`}</ul>
            <ul>{`Height: ${props.props.height}cm`}</ul>
            <ul>{`Mass: ${props.props.mass}kg`}</ul>
            <ul>{`Gender: ${props.props.gender}`}</ul>
            <ul>{`Birth Year: ${props.props.birth_year}`}</ul>
            {console.log('character sanity check')}
        </div>
    )
}