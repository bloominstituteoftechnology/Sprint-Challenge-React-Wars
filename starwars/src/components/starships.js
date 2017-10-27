import React, { Component } from 'react';


class Starships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starships: props.starships
    };
  }

  render() {
    return (
      <div>
          <div className='SubSectionTitle'>Starships</div>
          {this.state.starships.map((starship, i) => {
            return (
              <div key={starship + i} className="SubSectionLink"><a href={starship}>Starship {i + 1}</a></div>

            )
          })}
      </div>
    );
  }
}

export default Starships;
