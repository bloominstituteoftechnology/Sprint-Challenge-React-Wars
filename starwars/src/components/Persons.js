import React from "react" 

const Persons = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <div>
                <h2>About Me</h2>
                <p>Eye Color</p>
                <p>Birth Year</p>
            </div>
        </div>
    )
}

export default Persons