import React from 'react';

class StarWarsCard extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.starwarsChars.map(x => {
          return <div>{x.name}</div>;
        })}
      </div>
    );
  }
}

export default StarWarsCard;
