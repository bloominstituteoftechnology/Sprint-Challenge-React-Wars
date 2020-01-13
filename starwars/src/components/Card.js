import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Card() {
    const [data, setData] = useState()
    useEffect(() => {
        axios
        .get('https://swapi.co/api/people')
        .then(res => setData(res.data))
    }, [])
    
    console.log(data)
    return (
    <div className="card-container">
      <h3>Character</h3>
      <h2>{data.characterInfo.name}</h2>
      <p>Name: {data.characterInfo.name}</p>
      <h3>Characteristics</h3>
      <p>Height: {data.characterInfo.height}</p>
      <p>Mass: {data.characterInfo.mass}</p>
      <p>Hair Color: {data.characterInfo.hair_color}</p>
      <p>Skin Color: {data.characterInfo.skin_color}</p>
      <p>Eye Color: {data.characterInfo.eye_color}</p>
      <p>Birth Year: {data.characterInfo.birth_year}</p>
      <p>Gender: {data.characterInfo.gender}</p>
    </div>
    )
}
 export default Card;
