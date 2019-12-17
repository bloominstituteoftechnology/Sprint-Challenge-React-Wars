import React from 'react'

const Card = (props) => {
    return (
        <div className="character-card">
            <h2>Name: {props.char.name}</h2>
            <p>Birth Year: {props.char.birth_year}</p>
            <p>Gender: {props.char.gender}</p>
            <p>Height: {props.char.height}</p>
            <p>Shatships: {props.char.starships.map((s, index) => {
              return <li><a key={index} href={s}>{s}</a></li>
            })}</p>
            <p>Vehicles: {props.char.vehicles.map((v, index) => {
              return <li><a key={index} href={v}>{v}</a></li>
            })}</p>
        </div>
    )
}
export default Card;