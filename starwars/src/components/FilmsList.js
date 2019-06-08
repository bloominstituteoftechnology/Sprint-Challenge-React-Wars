import React from 'react';

const FilmsList = props => {
    return (
        <div className="filmsList">
            {props.starwarsChars.films.map(films =>
                <FilmsList key={films.title} films={films} />
                )}
        </div>
    )
}

export default FilmsList;