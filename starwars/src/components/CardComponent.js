import React from 'react';
import Title from './TitleComponent';
//import Image from './ImageComponent';
import Data from './DataComponent';
import Endnotes from './EndnotesComponent';

const Card = props => {
    return (
        <div>
            <Title />
            <Image />
            <Data />
            <Endnotes/>       
        </div>
    )
}

export default Card;