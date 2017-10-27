import React, { Component } from 'react';


class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: props.films
    };
  }

  render() {
    return (
      <div>
          <div className='SubSectionTitle'>Appeared In</div>
          {this.state.films.map((film, i) => {
            return (
              <div key={film + i} className="SubSectionLink"><a href={film}>Film {i + 1}</a></div>

            )
          })}
      </div>
    );
  }
}

export default Films;
