import React from "react";

const FilmSelectForm = props => {
  return (
    <div>
      FILM SELECTION FORM
      <form>
        <div className="form-group">
          <label htmlFor="movieSelect">Sort by movie appearance</label>
          <select
            name="movieSelect"
            id="movieSelect"
            className="form-control"
            onChange={props.currentMovieHandler}
          >
            <option value="all">All</option>
            <option value="https://swapi.co/api/films/1/">A New Hope</option>
            <option value="https://swapi.co/api/films/2/">
              The Empire Strikes Back
            </option>
            <option value="https://swapi.co/api/films/3/">
              Return of the Jedi
            </option>
            <option value="https://swapi.co/api/films/4/">
              The Phantom Menace
            </option>
            <option value="https://swapi.co/api/films/5/">
              Attack of the Clones
            </option>
            <option value="https://swapi.co/api/films/6/">
              Revenge of the Sith
            </option>
            <option value="https://swapi.co/api/films/7/">
              The Force Awakens
            </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default FilmSelectForm;
