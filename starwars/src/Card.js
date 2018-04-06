import React from 'react';

const Card = props => {
    return (
            props.starwarsChars.map((item, index) => (
                <div key {...item + index} className="cardContainer">
                    <div className="name">{item.name}</div>
                    <div className="gender">Gender: {item.gender}</div>
                    <div className="physical">Physical Traits: Height: {item.height}, Mass: {item.mass} kg, Hair Color: {item.hair_color}, Skin Color: {item.skin_color}</div>
                </div>
            ))
    )
}

export default Card;