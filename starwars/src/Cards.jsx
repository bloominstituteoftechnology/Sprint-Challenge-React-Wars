import React from 'react';
import Card from './Card';

const Cards = (props) => {
    
    // return (
    //     <div className="cards-container">
    //         {props.stats.starwarsChars.map(char => (
    //             <Card 
    //                 name={char.name}
    //                 birth_year={char.birth_year}
    //                 gender={char.gender}
    //                 height={char.height}
    //                 mass={char.mass}
    //                 skin_color={char.skin_color}
    //                 eye_color={char.eye_color}
    //                 hair_color={char.hair_color}
    //             />
    //         ))}
    //     </div>
    // )

    let char = props.stats.starwarsChars.map(char => (
        <Card 
            name={char.name}
            birth_year={char.birth_year}
            gender={char.gender}
            height={char.height}
            mass={char.mass}
            skin_color={char.skin_color}
            eye_color={char.eye_color}
            hair_color={char.hair_color}

            key={Math.random()}
        />
    ))

    return (
        <div>
            {char}
        </div>
    )

}

export default Cards