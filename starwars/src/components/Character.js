// Write your Character component here
import React from 'react';



export default (people) => {
    console.log({people});
    return (
        <div>
            
            <h1>{people.characters}</h1>
            <p>{people.height}</p>
            <p>{people.birth_year}</p>
            <p>{people.eye_color}</p>
        </div>
    )
}