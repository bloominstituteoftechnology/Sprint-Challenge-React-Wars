import React from 'react';

class CharDetails extends React.Component {
  state = {
    homeworld: null,
  };
  
  render() {
    const { char } = this.props;
    return (
      <li className="char">
        <h1>{char.name}</h1>
        <div>{char.eye_color} eyes</div>
        <hr />
          {this.state.homeworld !== null ? (
            <div>Homeworld: {this.state.homeworld.name}</div>
          ) : null}
        <hr />
        {/* {char.films.map(url => {
          return <Film url={url} />;
        })} */}
      </li>
    );
  }

  componentDidMount() {
    fetch(this.props.char.homeworld)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ homeworld: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
}

export default CharDetails;