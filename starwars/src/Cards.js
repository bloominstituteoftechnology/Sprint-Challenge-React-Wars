import React from 'react';

const Cards = props => {
    return (
        <div className = 'cards'>
           
                <h2 className = 'title'> {props.data.name}</h2>
                    <p className = 'listItem'>Gender: {props.data.gender}</p>
                    <p className = 'listItem'>Hair Color: {props.data.hair_color}</p>
                    <p className = 'listItem'>Eye Color: {props.data.eye_color}</p>
                    <p className = 'listItem'>Height: {props.data.height}</p>
                    <p className = 'listItem'>Skin Color: {props.data.skin_color}</p>
            
        </div>
    )
}
export default Cards;