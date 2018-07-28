import React from 'react';
import Card from './Card';
import './card.css'

const Characters = props => {
    return (
        <div className="characterCards">
            {props.charArray.map(item => 
            <Card isRobot ={props.isRobot} clickedHumanishButton={props.clickedHumanishButton} clickedRobotButton={props.clickedRobotButton} itemprop={item}/>)}
        </div>
    );
}

export default Characters;