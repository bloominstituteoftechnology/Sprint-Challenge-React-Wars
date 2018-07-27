import React from 'react'; 

const Header = props => {
    return(
        <div>
            <h1>{props.header}</h1>
            <img src = {props.species} alt = "Character Species" />
        </div>
    )
}

export default Header; 