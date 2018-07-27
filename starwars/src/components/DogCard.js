import React from 'react'
import './StarWars.css'

function DogCard(props){
    const data = props.data
    console.log(data)
    return (
        <div className="card">
            <h1>{data.name}</h1>
            <img src={data.imageUrl} alt={`${data.name}-image`}/>
        </div>
    )
}

export default DogCard