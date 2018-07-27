import React from 'react';
import './StarWars.css';

const Character = props => {
    return (
    <div className="text-box">
        <img src="https://vignette.wikia.nocookie.net/star-wars-destiny-card-game/images/3/30/Swd03_poe-dameron.png/revision/latest?cb=20160924152517" alt="Avatar"/>
        <h4><b>{props.mychar.name}</b></h4>
        <p>{ JSON.stringify(props.mychar, null, 2) }</p>
    </div>
    );
}

export default Character;