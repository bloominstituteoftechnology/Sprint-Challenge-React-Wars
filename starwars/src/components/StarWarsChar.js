import React from 'react';
import './StarWars.css';
// import HairEyes from '../components/HairEyes';
// import HeightMass from './HeightMass';

const StarWarsChar = (props) => {
    return (
        <div className="cards"> 
            {props.starwarsChars.map(char => {
                return (
                    <div className="card" key={char.toString()}>
                        <div className="person">
                            <h1>{char.name}</h1>
                            <div className="age">
                                <p>Born in: {char.birth_year}</p>
                                <p>Gender: {char.gender}</p>
                            </div>
                        </div>
                        <div className="char_info">
                            <div className="left_text"> 
                                <p>Height: {char.height}</p>
                                <p>Weight: {char.mass} kg</p>
                            </div>
                            <div className="right_text">
                                <p>Hair Color: {char.hair_color}</p>
                                <p>Eye Color: {char.eye_color}</p>
                            </div>
                        </div>
                        {/* <HairEyes starwarsChars={this.props.state.starwarsChars} /> */}
                        
                    </div>
                )
            })}
        </div>
    )
}

export default StarWarsChar;