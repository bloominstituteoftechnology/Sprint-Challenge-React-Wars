import React from 'react';

class Data extends React.Component {
  state = {

  }

  render() {
    // console.log(this.props.data);
    return (
      <div className='chars'>
      {this.props.data.map(char => {
        return (
          <div key={char.created} className='char'>
            <div className='char-name'> {char.name} </div>
            <div className='char-bd'> <span>Birth Year:</span> {char.birth_year} </div>
            <div className='char-gender'> <span>Gender:</span> {char.gender} </div>
            <div className='char-hair'> <span>Hair Color:</span> {char.hair_color} </div>
            <div className='char-height'> <span>Height:</span> {char.height}{'cm'} </div>
            <div className='char-mass'> <span>Mass:</span> {char.mass}{'kg'} </div>
            <div className='char-skin'> <span>Skin Color:</span> {char.skin_color} </div>
          </div>
            );
      })}
      </div>
    );
  }
}

export default Data;