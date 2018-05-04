import React from 'react';

const CharContainer = props => {
  return (
    <div className='char-card-container'>
      
      {
        props.charData.map(char => {
          return (
            <div class="char-card-container__char-card">
              <h2>{ char.name }</h2>
              <p><span>Gender:</span> { char.gender }</p>
              <p><span>Birth Year:</span> { char.birth_year }</p>
              <p><span>Eye Color:</span> { char.eye_color }</p>
              <p><span>Hair Color:</span> { char.hair_color }</p>
              <p><span>Height:</span> { char.height }</p>
              <p><span>Weight:</span> { char.mass }</p>
              <p><span>Skin Color:</span> { char.skin_color }</p>

              <div>
                <div>
                  <p>Films</p>
                </div>
                <div>
                  { 
                    char.films.map(film => {
                      return (
                        <p>{ film }</p>
                      )
                    }) 
                  }
                </div>
              </div>

              <div>
                <div>
                  <p>Specie</p>
                </div>
                <div>
                  {
                    char.species.map(specie => {
                      return (
                        <p>{ specie }</p>
                      )
                    })
                  }
                </div>
              </div>

              <div>
                <div>
                  <p>StarShips</p>
                </div>
                <div>
                  {
                    char.starships.map(starship => {
                      return (
                        <p>{ starship }</p>
                      )
                    })
                  }
                </div>
              </div>

              <div>
                <div>
                  <p>Vehicles</p>
                </div>
                <div>
                  {
                    char.vehicles.map(vehicle => {
                      return (
                        <p>{ vehicle }</p>
                      )
                    })
                  }
                </div>
              </div>

            </div>
          )
        })
      }
      
    </div>
  );
};

export default CharContainer;