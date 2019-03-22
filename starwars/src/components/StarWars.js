import React from "react"

function StarWars(props){


//     "19BBY"
// created:
// "2014-12-09T13:50:51.644000Z"
// edited:
// "2014-12-20T21:17:56.891000Z"
// eye_color:
// "blue"
// films:
// Array[5]
// gender:
// "male"
// hair_color:
// "blond"
// height:
// "172"
// homeworld:
// "https://swapi.co/api/planets/1/"
// mass:
// "77"
// name:
// "Luke Skywalker"
// skin_color:
// "fair"
// species:
// Array[1]
// starships:
// Array[2]
// url:
// "https://swapi.co/api/people/1/"
// vehicles:
// Array[2]

    return(
        <div>
            <h1>{props.chars.name}</h1> 
            <h2>Stats:</h2>
            <ul>
                <li>Height: {props.chars.height}</li>
                <li>Mass: {props.chars.mass}</li>
                <li>Skin Color: {props.chars.skin_color}</li>
                <li>Hair Color: {props.chars.hair_color}</li>
                <li>Eye Color: {props.chars.eye_color}</li>

                <li>Birth Year: {props.chars.birth_year}</li>
                <li>Species: {props.chars.species}</li>
                <li>Starships: {props.chars.starships}</li>
                <li>URL: {props.chars.url}</li>
                <li>Films: {props.chars.films}</li>
                <li>Created: {props.chars.created}</li>
                <li>Edited: {props.chars.edited}</li>
                <li>{props.chars.homeworld}</li>
            </ul> 

        </div>
       
    )
}

export default StarWars