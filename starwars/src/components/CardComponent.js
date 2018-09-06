import React from 'react';

// This component will display character information as a card

// class CardComponent extends React.Component {
//
//   render(props) {
//     return (
//       <div className="card">
//       <h2>{this.props.name}</h2>
//       </div>
//     );
//   }
//
// }

function CardComponent(props) {
  //ultimately, this function should contain everything to display
  //the character's information on a single card.
  const {char} = props;
  return (
    <div className="card">
    <h2>{props.char.name}</h2>
      <p>Gender: {props.char.gender}</p>
      <p>Hair color: {props.char.hair_color}</p>
      <p>Eye color: {props.char.eye_color}</p>
      <p>Height: {props.char.height}</p>
      <p>Mass: {props.char.mass}</p>
      <p>Skin color: {props.char.skin_color}</p>

    <ul>

    </ul>
    </div>

  );
}

export default CardComponent;
