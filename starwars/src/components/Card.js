import  React from 'react';
import ReactDOM from 'react-dom'
import './StarWars.css'

function Card (props){
    const data = props.data
    return (
        <div className="card">
            <h1>{data.name}</h1>
            <div>
                <p><strong>Birth Year:</strong> {data.birth_year}</p>
                <p><strong>Gender:</strong> {data.gender}</p>
                <p><strong>Eye Color:</strong> {data.eye_color}</p>
                <p><strong>Hair Color:</strong> {data.hair_color}</p>
                <p><strong>Height:</strong> {data.height}</p>
                <p><strong>Mass:</strong> {data.mass}</p>
                <p><strong>Skin Color:</strong> {data.skin_color}</p>
            </div>
        </div>
    )
}
 export default Card; 
     