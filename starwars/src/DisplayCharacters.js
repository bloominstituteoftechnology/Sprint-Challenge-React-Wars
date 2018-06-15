import React from "react";

let DisplayCharacters = props => {
      var printArray = [];
      for (let i = 0; i < props.starwarsChars.length; i++){
        printArray.push(
          <div className="card ">
            <img className="card-img-top" src="StarwarsLogo.png" alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">{props.starwarsChars[i].name}</h5>
              <p className="card-text">
                Gender: {props.starwarsChars[i].gender} <br></br>
                Height: {props.starwarsChars[i].height} <br></br>
                Mass: {props.starwarsChars[i].mass} <br></br>
              </p>
            </div>
          </div>
        )
      }
      return printArray;
}

export default DisplayCharacters;
