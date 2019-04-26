import React from 'react'
import '../StarWars.css'


const StarWarChars = (props) => {
    return (
        <section className="sw-list-container">
            {props.starwarsChars.map((char, index) => 
            <ul className="ul-names">
                <li key={index} className="char-names">{char.name}</li>
                <ul>
                    <li className="char-att"><strong>Height: </strong>{char.height}</li>
                    <li className="char-att"><strong>Mass: </strong>{char.mass}</li>
                    <li className="char-att"><strong>Hair Color: </strong>{char.hair_color}</li>
                    <li className="char-att"><strong>Skin Color: </strong>{char.skin_color}</li>
                    <li className="char-att"><strong>Eye Color: </strong>{char.eye_color}</li>
                    <li className="char-att"><strong>Birth Year: </strong>{char.birth_year}</li>
                    <li className="char-att"><strong>Gender: </strong>{char.gender}</li>
                </ul>
            </ul>) }
        </section>
    )
}

export default StarWarChars