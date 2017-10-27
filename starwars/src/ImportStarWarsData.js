import React from 'react';
import './ImportStarWarsData.css';


const ImportStarWarsData = (props) => {
    return (
        <div className="ImportStarWarsData">
            {props.starwarsChars.map((item) => {
                return(
                    <div className="ImportStarWarsData__item" key={item.starwarsChars}>
                    <h3>{item.name}</h3>
                    <p>Eye Color: {item.eye_color}</p>
                    <p>Gender: {item.gender}</p>
                    <p>Hair Color: {item.hair_color}</p>
                    <p>Height: {item.height}</p>
                    <p>Mass: {item.mass}</p>
                    <p>Skin Color: {item.skin_color}</p>
                    {/* <p>Created: {item.created}</p>
                    <p>Edited: {item.edited}</p> */}
                    </div>
                )
            })}
            </div>
    );
}

export default ImportStarWarsData;