import React from 'react';

const CharData = props => {
  return (
    <React.Fragment>
            <div className='char-card-container__char-card-wrapper'>
              <div className="char-card-container__char-card">

                <h2 className='mt-2'>{props.name}</h2>
                <p className='mt-2'><span className='char-card__char-info-label'>Gender:</span> {props.gender}</p>
                <p className='mt-2'><span className='char-card__char-info-label'>Birth Year:</span> {props.birthYear}</p>
                <p className='mt-2'><span className='char-card__char-info-label'>Eye Color:</span> {props.eyeColor}</p>
                <p className='mt-2'><span className='char-card__char-info-label'>Hair Color:</span> {props.hairColor}</p>
                <p className='mt-2'><span className='char-card__char-info-label'>Height:</span> {props.height}</p>
                <p className='mt-2'><span className='char-card__char-info-label'>Weight:</span> {props.mass}</p>
                <p className='mt-2'><span className='char-card__char-info-label'>Skin Color:</span> {props.skinColor}</p>

                {/*<div className='mt-2'>
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
                </div>*/}

              </div>
            </div>
    </React.Fragment>
  );
}

export default CharData;