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
          <p><strong>NAME:</strong> {this.props.name}</p>
          <p>test</p>
          <p>test</p>
        </div>
      </div>
    );
  }
}

export default Card;
