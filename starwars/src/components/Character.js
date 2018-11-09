import React from 'react'

const Character = (props) => {
  console.log("PROPS", props.charsOnProps.starwarsChars);
  return (
    <div>
      {props.charsOnProps.starwarsChars.map((char, index) => {
        return (
          <div className="charContainer">
            <h3 style={{color: "darkred", textTransform: "uppercase"}}>{char.name}</h3>
            <h5 style={{color: "#121212"}}>Born: {char.birth_year} <br />
                Height: {char.height} <br />
                Gender: {char.gender} <br />
                Eye Color: {char.eye_color} <br />
                Hair Color: {char.hair_color}
            </h5>
          </div>
        )
      })}

    </div>
  )
}

export default Character;