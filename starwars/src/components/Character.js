import React from 'react';

export default function Character(props) {

  return (

    <div className='character'>

      {Object.keys(props.data).map(charData => {
        return (
          <>
          <h3>{charData}</h3>
          <p>{props.data[charData]}</p>
          </>
        )
      })}

    </div>

  );

}
