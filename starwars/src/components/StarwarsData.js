import React from 'react';

function StarwarsData(props) {
    return (
        <div>
            {props.charInfoList.map((element, index ) => <Character key={i} traits={element})}
        </div>
    );
}

export default StarwarsData;