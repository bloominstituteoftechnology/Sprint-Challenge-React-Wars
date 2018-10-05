import React from 'react';



const Card = ({ id,name,gender, height, mass, homeworld, species,displaystylecard}) => {
  console.log(id)
    return (
        <li  className=' tc dib br3   pa3 ma2 grow bw2 shadow-5 '>
            <img alt='robotface' src={`https://robohash.org/${id}?50x50`}/>
            <h2> {name}</h2>
            <p>Gender: {gender}<br/> Height: {height}<br/> Mass: {mass}</p>
           
        </li>
    );
}
export default Card;