import React from "react";
import "./StarWars.css";
import luke from "../images/luke.jpg";
import c3po from "../images/c3po.jpg";
import r2d2 from "../images/r2d2.jpg";
import vader from "../images/vader.jpg";
import leia from "../images/leia.jpg";
import lars from "../images/lars.jpg";
import beru from "../images/beru.jpg";
import r5d4 from "../images/r5d4.jpg";
import biggs from "../images/biggs.jpg";
import obi from "../images/obi.jpg";

const Card = props => {
  // let charPic = props.picture.map(pic => pic.name);
  let charPic = [luke, c3po, r2d2, vader, leia, lars, beru, r5d4, biggs, obi];
  console.log(charPic);

  return (
    <div className="container">
      {props.starwars.map((char, i) => {
        return (
          <div className="character">
            <img src={`${charPic[i]}`} alt={char.name} />
            <h2>{char.name}</h2>
            <p>
              <strong>Gender: </strong>
              {char.gender}
            </p>
            <p>
              <strong>DOB: </strong>
              {char.birth_year}
            </p>
            <p>
              <strong>Height: </strong>
              {char.height}
            </p>
            <p>
              <strong>Mass: </strong>
              {char.mass}
            </p>
            <p>
              <strong>Skin: </strong>
              {char.skin_color}
            </p>
            <p>
              <strong>Hair: </strong>
              {char.hair_color}
            </p>
            <p>
              <strong>Eyes: </strong>
              {char.eye_color}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
