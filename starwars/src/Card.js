import React from 'react';

const Card = props => {
  return (
    <div className="cards_container">
      {props.chars.map((char, index) => (
        <div className="card" key={`${char.name}${index}`}>
          {/********** Fetch call in question **********/}
          {props.fetchHomeworldData(char.homeworld, char, index)}
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
              {/********** EXPECTED  **********/}
                {/* {console.log(this)}  */}
                  {/* Returns Card functional component */}
                {/* {console.log(props.chars[index])} */}
                  {/* Returns character object with homeworldJSON property */}
              {/********** UNEXPECTED  **********/}
                {/* {console.log(props.chars[index].hasOwnProperty('homeworldJSON'))} */}
                  {/* Returns false for each character */}
                {/* {console.log(Object.keys(props.chars[index]))} */}
                  {/* Returns character object keys without homeworldJSON present-*/}
                {/* {console.log(char.homeworldJSON)} */}
                  {/* Returns undefined for each character */}
            </div>
          </div>
          <div className="card_personPic"></div>
        </div>
      ))}
    </div>
  )
}

export default Card;