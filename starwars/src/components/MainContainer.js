import React from 'react';
import InfoContainer from './info/InfoContainer';
import './main.css';

const MainContainer = (props) => {
    return (
        <div className="main-container">
            <h1>React Wars</h1>
            <img src={require("../Luke.jpeg")} alt=""/>
            <div className="info">
                <ul>
                    {props.starwarsChars.map(char => <InfoContainer starwarsChar={char}/>)}
                </ul>
            </div> 
        </div>
    )
}

export default MainContainer;
