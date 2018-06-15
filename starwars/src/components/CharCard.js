import React from "react";

let statNames = [
  { heading: "Gender", propName: "gender" },
  { heading: "Birth Year", propName: "birth_year" },
  { heading: "Height", propName: "height", suffix: "cm" },
  { heading: "Mass", propName: "mass", suffix: "kg" },
  { heading: "Eye Color", propName: "eye_color" },
  { heading: "Hair Color", propName: "hair_color" },
  { heading: "Complexion", propName: "skin_color" }
];

function CharCard(props) {
  // let films = props.char.films.map((film) => {
  //     return (
  //         <div key=filmclassName="film"
  //     );
  // })

  let statList = statNames.map(stat => {
    return (
      <div key={stat.propName} className={"row charStat " + stat.propName}>
        <div className="cell stat-name">{stat.heading}</div>
        <div className="cell stat-value">
          {props.char[stat.propName] +
            (stat.hasOwnProperty("suffix") ? stat.suffix : "")}
        </div>
      </div>
    );
  });

  return (
    <div className="char-card">
      <div className="name">
        <h1>{props.char.name}</h1>
      </div>
      <div className="stats">
        <h2>Vital Stats</h2>
        <div className="stat-table">{statList}</div>
      </div>
    </div>
  );
}

export default CharCard;
