import React from 'react'
import './card.css'
import sox from './img/sox.jpg'

const Card = props => {
    return (
    <div className ={
        `characterCard 
        ${!props.clickedHumanishButton() ? null : props.clickedHumanishButton() && props.isRobot(props.itemprop.name) ? 'poof' : null} 
        ${!props.clickedRobotButton() ? null : props.clickedRobotButton() && !props.isRobot(props.itemprop.name) ? 'poof' : null}`
    }>
        <img className="pic" src={sox} alt="socks"/>
        <div className="pictext">
            <h3>{props.itemprop.name}</h3>
            <div>Eye color: {props.itemprop.eye_color}</div>
            <div>Hair color: {props.itemprop.hair_color}</div>
            <div>Mass: {props.itemprop.mass}</div>
            <div>Skin color: {props.itemprop.skin_color}</div>
            <div>Birth year: {props.itemprop.birth_year}</div>
        </div>
    </div>
    )
}

export default Card;