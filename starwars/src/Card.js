import React from 'react';

const Card = props => {
  return (
    <div className="cards_container">
      {props.state.starwarsChars.map((char, index) => (
        <div className="card" key={`${char.name}${index}`}>
          {props.fetchHomeworldData(char.homeworld, char)}
          <div className="card_personInfo">
            <div className="personInfo_name">
              <strong>Name:</strong> {char.name}
            </div>
            <div className="personInfo_gender">
              <strong>Gender:</strong> {char.gender}
            </div>
            <div className="personInfo_height">
              <strong>Height:</strong> {char.height}
            </div>
            <div className="personInfo_mass">
              <strong>Mass:</strong> {char.mass}
            </div>
            <div className="personInfo_hairColor">
              <strong>Hair Color:</strong> {char.hair_color}
            </div>
            <div className="personInfo_eyeColor">
              <strong>Eye Color:</strong> {char.eye_color}
            </div>
            <div className="personInfo_homeworld">
              <strong>Homeworld:</strong> 
              {console.log(this)} 
              {console.log(char.homeworldJSON)}
              {console.log(char)}
            </div>
          </div>
          <div className="card_personPic"></div>
        </div>
      ))}
    </div>
  )
}

export default Card;