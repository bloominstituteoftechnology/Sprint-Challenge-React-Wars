import React from 'react';
import './StarWars.css';

const Characters = (props) => {
  return (
    <React.Fragment>

      {
        props.starwarsChars.map((item, index) => {
          return (
            <div className={`heroCard ${item.eye_color}`} key={item.created}>
              <div className="heroName">
                <h2>Name: {item.name}</h2>
              </div>
              <p>Gender: {item.gender}</p>
              <p>EyeColor: {item.eye_color}</p>
              <p>Height: {item.height} inch</p>
            </div>
          )
        })
      }

    </React.Fragment>
  )
}

export default Characters;