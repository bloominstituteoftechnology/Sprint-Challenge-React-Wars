import React from "react";

let DisplayCharacters = props => {
      let printArray = [];
      for (let i = 0; i < props.starwarsChars.length; i++){
        let charImg = "img/char" + i + ".png"
        if (i < 1){
          printArray.push(
            <div className="card star-card">
              <img className="card-img-top star-card-img-top" src={charImg} alt="Character"></img>
              <div className="card-body star-card-body">
                <h5 className="card-title star-card-title">{props.starwarsChars[i].name}</h5>
                <p className="card-text star-card-text">
                  <p>Gender: {props.starwarsChars[i].gender}</p>
                  <p>Height: {props.starwarsChars[i].height} </p>
                  <p>Mass: {props.starwarsChars[i].mass}</p>
                </p>
              </div>
            </div>
          )
          }
          //only displaying one card, else statement is adding hidden attribute to card container
          else (
            printArray.push(
              <div className="card star-card">
                <img className="card-img-top star-card-img-top" src={charImg} alt="Character"></img>
                <div className="card-body star-card-body">
                  <h5 className="card-title star-card-title">{props.starwarsChars[i].name}</h5>
                  <p className="card-text star-card-text">
                    <p>Gender: {props.starwarsChars[i].gender}</p>
                    <p>Height: {props.starwarsChars[i].height} </p>
                    <p>Mass: {props.starwarsChars[i].mass}</p>
                  </p>
                </div>
              </div>
          )
        )
      }
      return printArray;
}

export default DisplayCharacters;
