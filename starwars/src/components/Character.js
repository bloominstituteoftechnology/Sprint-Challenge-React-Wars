import  React  from "react";


function Character(props) {
  return (
    <div className="character-card">
      <div className="character-info">
       <p><strong>Name:</strong>{props.char.name} </p>
        <p>
          <strong>Height:</strong> {props.char.height}
        </p>
        <p>
          <strong>Mass:</strong> {props.char.mass}
        </p>
        <p>
          <strong>Hair Color:</strong> {props.char.hair_color}
        </p>
        <p>
          <strong>Birth Year:</strong> {props.char.birth_year}
        </p>
        <p>
          <strong>Gender:</strong> {props.char.gender}
        </p>
      </div>
    </div>
  );
}

export default Character;
