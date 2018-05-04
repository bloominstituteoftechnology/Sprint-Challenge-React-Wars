import React, { Component } from 'react';

const CharData = props => {
  return (
    <React.Fragment>

      {
        props.charData.map((char, ind) => {
          return (
            <div className='char-card-container__char-card-wrapper'>
              <div key={ind + Date.now()} className="char-card-container__char-card">

                <h2 className='mt-2'>{char.name}</h2>
                <p className='mt-2'><span className='char-card__char-info-label'>Gender:</span> {char.gender}</p>
                <p className='mt-2'><span className='char-card__char-info-label'>Birth Year:</span> {char.birth_year}</p>
                <p className='mt-2'><span className='char-card__char-info-label'>Eye Color:</span> {char.eye_color}</p>
                <p className='mt-2'><span className='char-card__char-info-label'>Hair Color:</span> {char.hair_color}</p>
                <p className='mt-2'><span className='char-card__char-info-label'>Height:</span> {char.height}</p>
                <p className='mt-2'><span className='char-card__char-info-label'>Weight:</span> {char.mass}</p>
                <p className='mt-2'><span className='char-card__char-info-label'>Skin Color:</span> {char.skin_color}</p>

                <div className='mt-2'>
                  <div>
                    <p className='char-card__char-info-label'>Films</p>
                  </div>
                  <div>
                    {
                      char.films.map(film => {
                        return (
                          <p>{film}</p>
                        )
                      })
                    }
                  </div>
                </div>

                <div className='mt-2'>
                  <div>
                    <p className='char-card__char-info-label'>Specie</p>
                  </div>
                  <div>
                    {
                      char.species.map(specie => {
                        return (
                          <p>{specie}</p>
                        )
                      })
                    }
                  </div>
                </div>

                <div className='mt-2'>
                  <div>
                    <p className='char-card__char-info-label'>StarShips</p>
                  </div>
                  <div>
                    {
                      char.starships.map(starship => {
                        return (
                          <p>{starship}</p>
                        )
                      })
                    }
                  </div>
                </div>

                <div className='mt-2'>
                  <div>
                    <p className='char-card__char-info-label'>Vehicles</p>
                  </div>
                  <div>
                    {
                      char.vehicles.map(vehicle => {
                        return (
                          <p>{vehicle}</p>
                        )
                      })
                    }
                  </div>
                </div>

              </div>
            </div>
          );
        })
      }

    </React.Fragment>
  );
}

export default CharData;