import React from 'react'
import '../StarWars2.css'


const SWChar = (props) => {
    return (
        <section className="sw-list-container2">
            <ul className="ul-names2">
                <li className="char-names2">{props.SWChar.name}</li>
                <ul>
                    <li className="char-att2"><strong>Height: </strong>{props.SWChar.height}</li>
                    <li className="char-att2"><strong>Mass: </strong>{props.SWChar.mass}</li>
                    <li className="char-att2"><strong>Hair Color: </strong>{props.SWChar.hair_color}</li>
                    <li className="char-att2"><strong>Skin Color: </strong>{props.SWChar.skin_color}</li>
                    <li className="char-att2"><strong>Eye Color: </strong>{props.SWChar.eye_color}</li>
                    <li className="char-att2"><strong>Birth Year: </strong>{props.SWChar.birth_year}</li>
                    <li className="char-att2"><strong>Gender: </strong>{props.SWChar.gender}</li>
                </ul>
            </ul>
        </section>
    )
}

export default SWChar