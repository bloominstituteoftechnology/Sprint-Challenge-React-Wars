import React from 'react';

class CardList extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.starwarsChars.map(e => <div>{e.name}</div>)}
      </div>
    );
  }
}

export default CardList;