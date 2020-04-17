import React from "react";

export default function SearchBar({ setSearchTerm }) {

    const changeHandler = event => {
        const searchTerm = event.target.value
        setSearchTerm(searchTerm)
    }

    return (
        <div>
            <form className="search-form">
                <input
                    type="text"
                    placeholder="Search"
                    onChange={changeHandler} 
                    />
            </form>
        </div>

    );

};
