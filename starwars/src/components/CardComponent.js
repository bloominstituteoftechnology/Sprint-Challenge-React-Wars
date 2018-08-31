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
  return (
    <div className="card">
    <h2>{props.name}</h2>
      <p>Gender: {props.gender}</p>
      <p>Hair color: {props.hair_color}</p>
      <p>Eye color: {props.eye_color}</p>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
      <p>Skin color: {props.skin_color}</p>

    <ul>

    </ul>
    </div>

  );
}

export default CardComponent;
