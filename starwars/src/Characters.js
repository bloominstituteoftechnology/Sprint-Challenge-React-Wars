import React from 'react';
import './Characters.css';

const Characters = (props) => {
    console.log(props);
    console.log(props.starwarsChars);
    return (
        <div>
            {props.starwarsChars.map((char) => {
                return (
                    <div className="CharacterList">
                        <h3 className="Header">{char.name}</h3>
                        <div className="Prof">
                            <p className="Profile">
                                {char.height}"
                            </p>
                            <p className="Profile">
                                {char.mass}kg
                            </p>
                            <p className="Profile">
                                {char.gender}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Characters;