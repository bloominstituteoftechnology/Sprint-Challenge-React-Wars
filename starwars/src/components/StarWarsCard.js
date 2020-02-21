import React from 'react'

let StarWarsCard = (props) => {
    console.log('from from', props)
    return (
        <div className='container'>
            <p>Name: {props.name}</p>
            <p>Height: {props.height}</p>
            <p>Weight: {props.mass}kg</p>
            <p>Gender: {props.gender}</p>
            <p>Birth: {props.birth}</p>
        </div>
    )
}

export default StarWarsCard;