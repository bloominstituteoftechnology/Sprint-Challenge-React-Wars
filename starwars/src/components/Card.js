import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="card-container__card">
        <img src="#" alt="placeholder" />
        <div className="card__bio">
          <p><strong>NAME:</strong> {this.props.state.name}</p>
          <p><strong>GENDER:</strong> {this.props.state.gender}</p>
          <p><strong>YOB:</strong> {this.props.state.birth_year}</p>

          <p><strong>HEIGHT:</strong> {this.props.state.height}</p>
          <p><strong>MASS:</strong> {this.props.state.mass}</p>
        </div>
      </div>
    );
  }
}

export default Card;
