import React from 'react';
import Character from './Character';


function StarwarsData(props) {
    return (
        <div>
            {props.charInfoList.map((element, index ) => <Character key={index} traits={element} />)}
        </div>
    );
}

export default StarwarsData;