import React from 'react';
import './Character.css';

export const Character = (props) => {
    return (
      <div>
        {props.data.map((data => {
          return (
            <div class="container">
              <div class="border">
                <div>{data.name}</div>
                <div>Height: {data.height}</div>
                <div>Hair Color: {data.hair_color}</div>
                <div>Eye Color: {data.eye_color}</div>
                <div class="gender">Gender: {data.gender}</div>
              </div>
            </div>
            )
        }))}
      </div>
    )
  };

  export default Character;