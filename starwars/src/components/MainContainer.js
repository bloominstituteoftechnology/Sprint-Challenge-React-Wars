import React from 'react';
import Img from './Img';
import InfoContainer from './info/InfoContainer';
import './main.css';

const MainContainer = (props) => {
    return (
        <div className="main-container">
            <Img />
            <InfoContainer starwarsChars={props.starwarsChars} />
        </div>
    )
}

export default MainContainer;
