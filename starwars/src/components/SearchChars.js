import React from 'react';

const SearchChars = props => {
    return (
        <div className="SearchForm">
            <input
            onChange={props.charSearchChange}
            value={props.inputText}
            placeholder={'Search List'}
            ></input>
            <button type="submit">Search Now</button>
        </div>
    );
}

export default SearchChars;