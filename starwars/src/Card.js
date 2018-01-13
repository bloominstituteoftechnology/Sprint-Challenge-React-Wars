import React from 'react';

const swCArd = (props) => {
    return (
        <div className = "sw-container">
            <div className = "sw-name">
             <p1 className = "sw-name"> {cards.name} </p1>
        </div>
        <div>
            <p1 className = "sw-element"> Height: {cards.height} </p1>
        </div>
        <div>    
            <p1 className = "sw-element"> Mass: {cards.mass} </p1>
        </div>
        <div>
            <p1 className = "sw-element"> Hair Color: {cards.hair_color}</p1>
        </div>
        <div>
            <p1 className = "sw-element"> Skin Color: {cards.skin_color}</p1>
        </div>
        <div>
            <p1 className = "sw-element"> Eye Color: {cards.eye_color}</p1>        

    )
}