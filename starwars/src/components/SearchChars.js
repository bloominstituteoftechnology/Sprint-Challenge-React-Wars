import React from 'react';
import './StarWars.css';

const SearchChars = props => {
    return (
        <div className="SearchForm">
            <input
            className="SearchInput"
            onChange={props.charSearchChange}
            value={props.inputText}
            placeholder={'Find The Droid You\'re Looking For...'}
            ></input>
            <button type="submit">Search Now</button>
        </div>
    );
}

export default SearchChars;