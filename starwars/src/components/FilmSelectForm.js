import React from "react";

const FilmSelectForm = props => {
  return (
    <div>
      FILM SELECTION FORM
      <form>
        <div className="form-group">
          <label htmlFor="movieSelect">Sort by movie appearance</label>
          <select name="movieSelect" id="movieSelect" className="form-control">
            <option value="">All</option>
            <option value="">A New Hope</option>
            <option value="">The Empire Strikes Back</option>
            <option value="">Return of the Jedi</option>
            <option value="">The Phantom Menace</option>
            <option value="">Attack of the Clones</option>
            <option value="">Revenge of the Sith</option>
            <option value="">The Force Awakens</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default FilmSelectForm;
