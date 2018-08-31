import React from 'react';
import InfoContainer from './info/InfoContainer';
import './main.css';

const MainContainer = (props) => {
    return (
        <div className="main-container">
            <div className="info">
                <ul>
                    {props.starwarsChars.map(char => <InfoContainer starwarsChar={char}/>)}
                </ul>
            </div> 
        </div>
    )
}

export default MainContainer;
