import React from 'react';

// import CharsImages from './CharsImages';

// import CharFilms from './CharFilms';

const StarWarsCharsBio = props => {
    return (
        <div className='eachCharCard'>
        {/* <img src={props.characteristic.img} /> */}
            <div className='charInfo'>
                <h2>{props.characteristic.name}</h2>
                <p> <strong>Birth year:</strong> {props.characteristic.birth_year}</p>
                <p> <strong>Gender:</strong> {props.characteristic.gender}</p>
                <p> <strong>Hair color:</strong> {props.characteristic.hair_color}</p>
                <p> <strong>Eye color:</strong> {props.characteristic.eye_color}</p>

                {/* {props.characteristic.films.map((eachFilm, index) => (
          <CharFilms key={index} filmArray={eachFilm} />
        ))} */}

        {/* {this.state.imgUrls.map((eachImgUrl, index) => (
          <StarWarsCharsBio characteristic={eachImgUrl} />
        ))} */}

        {/* {props.imgUrlFromApp.map((eachImgUrl, index) => (
            <CharsImages key={index} images={eachImgUrl} />
        ))} */}
                
            </div>
        </div>
    )
}

export default StarWarsCharsBio;