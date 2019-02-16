import React from 'react'
import SingleCharacter from './SingleCharacter'

const SearchForCharacter = ({changeHandler, searchInput, getSingleCharacter, singleCharacter}) => {
    return (
        <React.Fragment>
            <form onSubmit={getSingleCharacter}>
            <input 
            style={{padding: '10px'}}
            type="text"
            placeholder="Search for a single character"
            name="searchInput"
            value={searchInput}
            onChange={changeHandler}
            />
            <button style={{padding: '10px', marginLeft: '15px'}}>Search</button>
            </form>
            
            {!singleCharacter ? null : <SingleCharacter singleCharacter={singleCharacter}/>}
        </React.Fragment>
    )
}

export default SearchForCharacter