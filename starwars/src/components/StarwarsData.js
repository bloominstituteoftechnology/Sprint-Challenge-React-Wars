import React from 'react';
import Character from './Character';


function StarwarsData(props) {
    return (
        <div className="character-cards">
            {props.charInfoList.map((element, index ) => <Character key={element.created} traits={element} />)}
        </div>
    );
}

export default StarwarsData;